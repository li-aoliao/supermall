<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
  .nav-bar{
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    .left{
      width: 60px;
    }
    .center{
      width: calc(100% - 120px);
    }
    .right{
      width: 60px;
    }
  }
</style>