<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(value, index) in banner" :key="index">
        <img :src="value.image" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/swiper-bundle.css';
  import {
    Swiper,
    SwiperSlide
  } from "vue-awesome-swiper";
  import SwiperCore, {
    Autoplay,
    Pagination
  } from 'swiper';
  SwiperCore.use([Autoplay,Pagination]);
  export default {
    name: 'carrousel',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      banner: {
        type: Array,
      },
    },
    data() {
      return {
        swiperOptions: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: true,
          effect: 'coverflow'
        }
      }
    },
  };
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 200px;
  }
</style>