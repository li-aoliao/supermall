<template>
  <div class="detail">
    <nav-bar>
      <template #left>
        <img src="~assets/img/common/back.svg" alt="" @click="back">
      </template>
      <template #center>
        <span v-for="(value,index) in title" @click="isClick(index)"
          :class="{change: index == currentIndex}" :key="index">{{value}}</span>
      </template>
    </nav-bar>
    <banner :topImages="topImages" />
    <detail-base-info :goods="goods"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import Banner from './childComps/Banner';
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import {
    getDetail,
    Goods
  } from 'network/detail.js';
  export default {
    name: 'Detail',
    components: {
      NavBar,
      Banner,
      DetailBaseInfo
    },
    data() {
      return {
        iid: null,
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
        topImages: [],
        goods: {},
      };
    },
    created() {
      this.iid = this.$route.query.iid;
      this.getDetail(this.iid);
    },
    methods: {
      getDetail(iid) {
        getDetail(iid).then(res => {
          const data = res.data.result;
          console.log(res.data.result);
          this.topImages = res.data.result.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          console.log(this.goods);
        })
      },
      isClick(index) {
        this.currentIndex = index;
      },
      back() {
        this.$router.back();
      }
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
        color: var(--color-high-text)
      }
    }
  }
</style>