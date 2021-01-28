<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll';
  export default {
    name: 'Bscroll',
    props: {
      probeType: {
        type: Number
      },
      pullUpLoad: {
        type: Boolean,
        pullUpLoad: false
      }
    },
    data() {
      return {
        scroll: null,
      };
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper,{
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        observeDOM: true,
        observeImage: true,
        click: true
      });
      this.scroll.on('scroll',(position) => {
        this.$emit('scrollPosition', position);
      });
      this.scroll.on('pullingUp',() => {
        this.$emit('refresh');
      })
    },
  };
</script>

<style lang="scss" scoped>

</style>