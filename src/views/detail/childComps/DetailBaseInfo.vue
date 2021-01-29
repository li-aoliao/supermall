<template>
  <div class="detail-base-info">
    <h3>{{goods.title}}</h3>
    <div class="price">
      <span>￥{{goods.realPrice}}</span>
      <del>{{goods.oldPrice}}</del>
      <span>{{goods.discount}}</span>
    </div>
    <div class="other" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <div class="service">
      <div v-for="(value,index) in goods.services" :key="index">
        <img :src="value.icon" alt="">
        <span>{{value.name}}</span>
      </div>
    </div>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    data() {
      return {

      };
    },
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .detail-base-info {
    width: 100%;
    padding: 10px 0;

    h3 {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 10px;
      padding: 0 10px;
    }

    .price {
      margin-bottom: 20px;
      padding: 0 10px;
      span {
        font-size: 18px;
        font-weight: bold;
        color: var(--color-high-text);
        margin-right: 20px
      }

      del {
        font-size: 14px;
        margin-right: 20px
      }
    }

    .other {
      display: flex;
      font-size: 14px;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 0 10px;
    }

    .service {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      padding: 0 10px;
      >div {
        width: 50%;
        height: 20px;
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        img {
          width: 18px;
          height: 18px;
        }

        span {
          font-size: 12px;
          padding-left: 10px
        }
      }
    }
  }
</style>