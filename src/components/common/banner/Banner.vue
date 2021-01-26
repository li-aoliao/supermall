<template>
  <swiper :options="swiperOptions" class="swiper">
    <swiper-slide v-for="value in banner" class="swiper-item">
      <img :src="value.image" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    name: 'Banner',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      banner: {
        type: Object
      }
    },
    data() {
      return {
        list: null,
        swiperOptions: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    created() {

    },
    mounted() {
      
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .swiper-item{
    img{
      width: 100%;
      height: 300px;
    }
  }
</style>