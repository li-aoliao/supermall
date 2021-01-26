<template>
  <div class="tab-bar-item" @click="isClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="active"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    components: {

    },
    props: {
      path: {
        type: String,
        default: '/home'
      },
      color: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        
      };
    },
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      active() {
        return this.isActive ? {color: this.color} : {}
      }
    },
    mounted() {
      
    },
    methods: {
      isClick() {
        this.$router.push(this.path)
      }
    },
  };
</script>

<style lang="scss" scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
    img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px
    }
  }
</style>