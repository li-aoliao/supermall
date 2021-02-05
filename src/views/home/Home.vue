<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <tab-control :title="title" @typeTrans="typeTrans" ref="tabctrl1" v-show="tabFixed"/>
    <bscroll class="box" ref="scroll" :probeType="3" @scrollPosition="scrollPosition" :pullUpLoad="true" @refresh="refresh">
      <banner :banner="banner" @imgLoad="imgLoad"/>
      <home-recommend-view :recommend="recommend" />
      <home-feature-view />
      <tab-control :title="title" @typeTrans="typeTrans" ref="tabctrl2"/>
      <goods-list :goodsList="goods[currentType].list" />
    </bscroll>
    <top-back @click.native="topBack" v-show="isActive"></top-back>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Banner from 'components/common/banner/Banner.vue'
  import Bscroll from 'components/common/bscroll/Bscroll.vue'


  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/Goods/GoodsList.vue'
  import TopBack from 'components/content/topback/TopBack.vue'
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'
  import HomeRecommendView from 'views/home/childComps/HomeRecommendView.vue'
  import HomeFeatureView from 'views/home/childComps/HomeFeatureView.vue'
  export default {
    name: 'Home',
    components: {
      NavBar,
      Banner,
      HomeRecommendView,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Bscroll,
      TopBack
    },
    data() {
      return {
        banner: [],
        recommend: [],
        title: ['流行', '新款', '精选'],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isActive: false,
        tabOffsetTop: 0,
        tabFixed: false,
        saveY: 0
      };
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page = page;
          this.$refs.scroll.scroll.finishPullUp();
        })
      },
      typeTrans(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break
          case 1:
            this.currentType = 'new';
            break
          case 2:
            this.currentType = 'sell';
            break
        }
        this.$refs.tabctrl1.currentIndex = index;
        this.$refs.tabctrl2.currentIndex = index;
      },
      topBack() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      scrollPosition(position) {
        this.isActive = position.y < -1000;
        this.tabFixed = -position.y > this.tabOffsetTop
      },
      refresh() {
        this.getHomeGoods(this.currentType);
      },
      imgLoad() {
        this.tabOffsetTop = this.$refs.tabctrl2.$el.offsetTop;
      },
      activated() {
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0);
      },
      deactivated() {
        this.saveY = this.$refs.scroll.scroll.getScrollY();
      },
    },
  };
</script>

<style lang="scss" scoped>
  #home {
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .box {
    width: 100%;
    height: calc(100vh - 93px);
    overflow: hidden;
    position: relative;
  }
</style>