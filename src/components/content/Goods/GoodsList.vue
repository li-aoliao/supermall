<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(value, index) in goodsList"
      :key="index"
      :goodsItem="value"
    />
  </div>
</template>

<script>
import GoodsListItem from "components/content/Goods/GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.goods-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>