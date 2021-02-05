<template>
  <div class="goods-detail">
    <div class="desc">{{detailImage.desc}}</div>
    <div class="key">{{detailImage.key}}</div>
    <div class="image">
      <img :src="value" alt="" v-for="(value,index) in detailImage.list" :key="index">
    </div>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetail',
  props: {
    detailImage: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .goods-detail{
    width: 100%;
    .desc{
      padding: 0 10px;
      font-size: 14px;
      line-height: 22px;
    }
    .key{
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      background-color: var(--color-tint);
    }
    .image{
      display: flex;
      flex-wrap: wrap;
      img{
        width: 100%;
        height: auto;
      }
    }
  }
</style>