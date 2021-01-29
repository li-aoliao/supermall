<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="">
    <p>{{goodsItem.title}}</p>
    <div><span>￥{{goodsItem.price}}</span><span>收藏：{{goodsItem.cfav}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data() {
    return {

    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push({
        path: 'detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  .goods-list-item{
    width: 50%;
    padding: 5px;
    img{
      width: 100%;
      height: 250px;
    }
    p{
      width: 100%;
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    div{
      width: 100%;
      font-size: 12px;
      text-align: center;
      padding-top: 10px;
      span{
        padding: 10px;
      }
      span:nth-child(1){
        color: var(--color-high-text);
      }
    }
  }
</style>