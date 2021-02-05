<template>
  <div class="detail">
    <nav-bar>
      <template #left>
        <img src="~assets/img/common/back.svg" alt="" @click="back" />
      </template>
      <template #center>
        <span
          v-for="(value, index) in title"
          @click="isClick(index)"
          :class="{ change: index == currentIndex }"
          :key="index"
          >{{ value }}</span
        >
      </template>
    </nav-bar>
    <bscroll
      class="box"
      :pullUpLoad="true"
      :probeType="3"
      @scrollPosition="scrollPosition"
      ref="scroll"
    >
      <template>
        <banner :topImages="topImages" />
        <detail-base-info :goods="goods" />
        <shop-info :shop="shop" />
        <goods-detail :detailImage="detailImage" />
        <goods-param-info :goodsParam="goodsParam" ref="param" />
        <comment :rate="rate" ref="rate" />
        <goods-list :goodsList="recommends" ref="goods" />
      </template>
    </bscroll>
    <detail-bottom @collectAdd="collectAdd" />
  </div>
</template>

<script>
import Bscroll from "components/common/bscroll/Bscroll";
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/Goods/GoodsList";
import Banner from "./childComps/Banner";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import ShopInfo from "./childComps/ShopInfo";
import GoodsDetail from "./childComps/GoodsDetail";
import GoodsParamInfo from "./childComps/GoodsParamInfo";
import DetailBottom from "./childComps/DetailBottom";
import Comment from "./childComps/Comment";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";
import { goodsRecommend } from "network/recommend.js";
export default {
  name: "Detail",
  components: {
    NavBar,
    Banner,
    DetailBaseInfo,
    ShopInfo,
    Bscroll,
    GoodsDetail,
    GoodsParamInfo,
    DetailBottom,
    Comment,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailImage: {},
      goodsParam: {},
      rate: {},
      recommends: [],
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail(this.iid);
    this.goodsRecommend();
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.data.result;
        this.topImages = res.data.result.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailImage = data.detailInfo.detailImage[0];
        this.goodsParam = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        this.getGoodsSize();
        this.rate = data.rate;
      });
    },
    goodsRecommend() {
      goodsRecommend().then((res) => {
        this.recommends = res.data.data.list;
      });
    },
    isClick(index) {
      this.currentIndex = index;
      switch (this.currentIndex) {
        case 0:
          this.$refs.scroll.scroll.scrollTo(0, 0, 500);
          break;
        case 1:
          this.$refs.scroll.scroll.scrollTo(
            0,
            -this.$refs.param.$el.offsetTop,
            500
          );
          break;
        case 2:
          this.$refs.scroll.scroll.scrollTo(
            0,
            -this.$refs.rate.$el.offsetTop,
            500
          );
          break;
        case 3:
          this.$refs.scroll.scroll.scrollTo(
            0,
            -this.$refs.goods.$el.offsetTop,
            500
          );
      }
      // if(this.currentIndex == 1){
      //   this.$refs.scroll.scroll.scrollTo(0,-this.$refs.param.$el.offsetTop,500)
      // }
    },
    back() {
      this.$router.back();
    },
    getGoodsSize() {
      let sizes = this.goodsParam.sizes;
      let allSize = [];
      if (sizes.length > 1) {
        sizes[1].forEach((value) => {
          value.shift();
        });
        for (let i = 0; i < sizes[0].length; i++) {
          allSize.push(sizes[0][i].concat(sizes[1][i]));
        }
        this.goodsParam.sizes = allSize;
      } else {
        this.goodsParam.sizes = sizes[0];
      }
    },
    collectAdd(num) {
      let collected = +this.goods.columns[1].match(/\d+/)[0];
      this.goods.columns[1] = `收藏${collected + num}人`;
      console.log(this.goods.columns[1]);
    },
    scrollPosition(position) {
      let scrollY = -this.$refs.scroll.scroll.y;
      if(scrollY >= 0 && scrollY < this.$refs.param.$el.offsetTop){
        this.currentIndex = 0 
      }else if(this.$refs.rate.$el.offsetTop){
        if(scrollY >= this.$refs.param.$el.offsetTop && scrollY < this.$refs.rate.$el.offsetTop){
          this.currentIndex = 1
        }else if(scrollY >= this.$refs.rate.$el.offsetTop && scrollY < this.$refs.goods.$el.offsetTop){
          this.currentIndex = 2
        }else{
          this.currentIndex = 3
        }
      }else{
        if(scrollY >= this.$refs.param.$el.offsetTop && scrollY < this.$refs.goods.$el.offsetTop){
          this.currentIndex = 1
        }else{
          this.currentIndex = 3
        }
      }
      // else if((scrollY >= this.$refs.param.$el.offsetTop && scrollY < this.$refs.rate.$el.offsetTop) || (scrollY >= this.$refs.param.$el.offsetTop && scrollY < this.$refs.goods.$el.offsetTop)){
      //   this.currentIndex = 1
      // }else if(scrollY >= this.$refs.rate.$el.offsetTop && scrollY < this.$refs.goods.$el.offsetTop){
      //   this.currentIndex = 2
      // }else{
      //   this.currentIndex = 3
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .nav-bar {
  box-shadow: 0 0 1px #333;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center {
    display: flex;
    justify-content: space-around;
    font-size: 15px;

    .change {
      color: var(--color-high-text);
    }
  }
}
.box {
  width: 100%;
  height: calc(100vh - 93px);
  overflow: hidden;
  background-color: #fff;
  position: relative;
}
</style>