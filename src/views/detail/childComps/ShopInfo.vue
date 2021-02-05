<template>
  <div class="shop-info" v-if="shop">
    <div class="logo">
      <img :src="shop.logo" alt="" />
      <div class="shop-name">{{ shop.name }}</div>
    </div>
    <div class="desc">
      <div class="left">
        <div class="sells">
          <p>{{ sells }}万</p>
          <p>总销量</p>
        </div>
        <div class="goods-count">
          <p>{{ shop.goodsCount }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(value, index) in shop.score" :key="index">
          <span>{{ value.name }}：</span>
          <span :class="{green:value.isBetter,red:!value.isBetter}">{{ value.score }}</span>
        </div>
      </div>
    </div>
    <a :href="shop.shopUrl">去店铺逛逛 >></a>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
  </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  computed: {
    sells() {
      return (this.shop.sells / 10000).toFixed(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.shop-info {
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      padding: 20px;
    }
    .shop-name {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .desc {
    display: flex;
    font-size: 14px;
    .left {
      display: flex;
      width: 50%;
      justify-content: space-around;
      .sells {
        width: 40%;
        text-align: center;
        p {
          padding: 5px 0;
        }
      }
      .goods-count {
        width: 40%;
        text-align: center;
        p {
          padding: 5px 0;
        }
      }
    }
    .right {
      width: 50%;
      padding-left: 20px;
      border-left: 1px solid #f6f6f6;
      > div {
        padding: 5px 0;
        span {
          padding: 0 5px;
        }
        .green{
          color: green;
        }
        .red{
          color: red;
        }
      }
    }
  }
  a{
    display: block;
    width: 40%;
    margin: 10px auto;
    text-align: center;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    background: var(--color-text);
  }
}
</style>