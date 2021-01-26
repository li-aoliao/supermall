<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <tab-bar-item path="/home" color="deeppink">
        <template #item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" color="deeppink">
        <template #item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" color="deeppink">
        <template #item-icon>
          <img src="~assets/img/tabbar/cart.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path= "/profile" color="deeppink">
        <template #item-icon>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabBarItem
    }
  }
</script>

<style lang="scss">
@import 'assets/css/base.css';
</style>
