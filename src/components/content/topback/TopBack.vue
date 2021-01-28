<template>
  <div class="top-back">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'TopBack',
};
</script>

<style lang="scss" scoped>
  .top-back{
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 55px;
    right: 5px;
    img{
      width: 50px;
      height: 50px;
    }
  }
</style>