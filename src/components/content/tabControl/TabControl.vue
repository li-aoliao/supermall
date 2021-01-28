<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(value,index) in title" :key="index" :class="{active:index == currentIndex}" @click="itemClick(index)">
      <span>{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  components: {

  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('typeTrans',index);
    }
  },
};
</script>

<style lang="scss" scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
    font-size: 15px;
    .tab-control-item{
      flex: 1;
      span{
        padding: 5px;
      }
    }
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>