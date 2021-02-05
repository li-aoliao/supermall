<template>
  <div class="goods-param-info">
    <div class="size-key">{{goodsParam.sizeKey}}</div>
    <div class="size">
      <div class="size-row" v-for="(value,index) in goodsParam.sizes" :key="index">
        <span v-for="(sizeValue,index) in value" :key="index">{{sizeValue}}</span>
      </div>
    </div>
    <div class="size-desc">{{goodsParam.sizeDesc}}</div>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
    <div class="info-key">{{goodsParam.infoKey}}</div>
    <div class="info">
      <div class="info-row" v-for="(value,index) in goodsParam.infos" :key="index">
        <div>{{value.key}}</div>
        <div>{{value.value}}</div>
      </div>
    </div>
    <div style="height: 10px;background-color: #f6f6f6;"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsParamInfo',
  props: {
    goodsParam: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .goods-param-info{
    width: 100%;
    font-size: 14px;
    .size-key{
      padding: 10px 5px;
      font-size: 18px;
      font-weight: bold;
      background-color: var(--color-tint);
    }
    .size{
      text-align: center;
      padding: 0 10px;
      .size-row{
        padding: 10px 5px;
        font-size: 14px;
        display: flex;
        border-bottom: 1px solid #666;
        span{
          flex: 1;
        }
      }
    }
    .size-desc{
      padding: 5px 10px;
      margin: 10px 0;
      color: red;
      line-height: 22px;
    }
    .info-key{
      padding: 10px 5px;
      font-size: 18px;
      font-weight: bold;
      background-color: var(--color-tint);
    }
    .info{
      padding: 0 10px;
      .info-row{
        display: flex;
        padding: 10px 10px;
        border-bottom: 1px solid #666;
        div:nth-child(1){
          width: 30%;
        }
        div:nth-child(2){
          width: 70%;
          color: var(--color-high-text)
        }
      }
    }
  }
</style>