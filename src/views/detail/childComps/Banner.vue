<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(value,index) in topImages" :key="index"><img :src="value" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperSlide
  } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.min.css';
  import SwiperCore, {
    Autoplay,
    Pagination
  } from 'swiper';
  SwiperCore.use([Autoplay, Pagination]);
  export default {
    name: 'Banner',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOptions: {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      };
    },
    props: {
      topImages: {
        type: Array,
        default () {
          return []
        }
      }
    },
    mounted() {

    },
    methods: {

    },
  };
</script>

<style lang="scss" scoped>
  /deep/ .swiper-container {
    width: 100%;
    height: 300px;
    overflow: hidden;

    .swiper-slide {
      img {
        width: 100%;
      }
    }

    .swiper-pagination {
      .swiper-pagination-bullet-active {
        background-color: #f40;
      }
    }
  }
</style>