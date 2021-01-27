<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <banner :banner="banner"/>
    <home-recommend-view :recommend="recommend" />
    <home-feature-view />
    <tab-control :title="title" />
    <div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import Banner from 'components/common/banner/Banner.vue';
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import {getHomeMultidata} from 'network/home';
  import HomeRecommendView from 'views/home/childComps/HomeRecommendView.vue'
  import HomeFeatureView from 'views/home/childComps/HomeFeatureView.vue'
  export default {
    name: 'Home',
    components: {
      NavBar,
      Banner,
      HomeRecommendView,
      HomeFeatureView,
      TabControl
    },
    data() {
      return {
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],
        title: ['流行','新款','精选']
      };
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res.data.data.recommend.list);
        this.banner = res.data.data.banner.list;
        this.dKeyword = res.data.data.dKeyword;
        this.keywords = res.data.data.keywords;
        this.recommend = res.data.data.recommend.list;
      })
    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 9;
  }
</style>