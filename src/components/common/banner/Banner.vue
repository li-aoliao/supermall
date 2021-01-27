<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide v-for="(value, index) in banner" class="swiper-item" :key="index">
      <img :src="value.image" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
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
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        effect: "cube",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  .swiper-item {
    img {
      width: 100%;
      height: 200px;
    }
  }
  .swiper-pagination {
  }
}
</style>
