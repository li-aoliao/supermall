<template>
  <div class="recommend">
    <div v-for="(value,index) in recommend" :key="index">
      <a :href="value.link">
        <img :src="value.image" alt="">
        <div>{{value.title}}</div>
      </a>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommend: {
      type: Array
    }
  },
};
</script>

<style lang="scss" scoped>
  .recommend{
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    >div{
      flex: 1;
      img{
        width: 100%;
        padding: 5px;
      }
      div{
        font-size: 14px;
        text-align: center;
      }
      >div{
        width: 100%;
        height: 15px;
        background-color: #f6f6f6;
        margin-top: 10px;
      }
    }
  }
</style>