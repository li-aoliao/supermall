<template>
  <div class="detail-bottom">
    <div class="service">
      <p></p>
      <span>客服</span>
    </div>
    <div class="shop">
      <p></p>
      <span>商铺</span>
    </div>
    <div class="collection" @click="isCollect">
      <p :class="{ collected: key }"></p>
      <span>收藏</span>
    </div>
    <div class="cart">购物车</div>
    <div class="purchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottom",
  data() {
    return {
      key: false,
    };
  },
  methods: {
    isCollect() {
      this.key = !this.key;
      if(this.key){
        this.$emit('collectAdd',1)
      }else{
        this.$emit('collectAdd',-1)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-bottom {
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  background-color: #f6f6f6;
  position: relative;
  z-index: 9;
  display: flex;
  font-size: 14px;
  %left {
    flex-grow: 1;
    height: 100%;
    padding: 3px 0;
    text-align: center;
  }
  %right {
    flex-grow: 2;
    height: 100%;
    line-height: 49px;
    text-align: center;
  }
  .service {
    @extend %left;
    p {
      height: 60%;
      background: url(../../../assets/img/detail/detail_bottom.png) no-repeat
        19px -63px/40%;
    }
  }
  .shop {
    @extend %left;
    p {
      height: 60%;
      background: url(../../../assets/img/detail/detail_bottom.png) no-repeat
        19px -116px/40%;
    }
  }
  .collection {
    @extend %left;
    p {
      height: 60%;
      background: url(../../../assets/img/detail/detail_bottom.png) no-repeat
        19px 2px/40%;
    }
    .collected {
      background-position: 19px -31px;
    }
  }
  .cart {
    @extend %right;
    background-color: greenyellow;
  }
  .purchase {
    @extend %right;
    background-color: #f40;
  }
}
</style>