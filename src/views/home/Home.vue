<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        购物街
      </template>
    </nav-bar>
    <banner :banner="banner"></banner>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import {getHomeMultidata} from 'network/home';
  import Banner from 'components/common/banner/Banner.vue';
  export default {
    name: 'Home',
    components: {
      NavBar,
      Banner
    },
    data() {
      return {
        banner: null,
        dKeyword: null,
        keywords: null,
        recommend: null
      };
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res.data.data);
        this.banner = res.data.data.banner.list;
        this.dKeyword = res.data.data.dKeyword;
        this.keywords = res.data.data.keywords;
        this.recommend = res.data.data.recommend;
      })
    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>