<template>
  <div class="banner">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(value, index) in banner" :key="index">
        <img :src="value.image" alt="" @load="imgLoad"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import SwiperCore, {
  SwiperClass,
  Pagination,
  Mousewheel,
  Autoplay,
  Navigation,
  EffectFade,
  EffectCoverflow,
} from "swiper";
SwiperCore.use([Autoplay, Pagination, EffectFade, EffectCoverflow]);
export default {
  name: "carrousel",
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
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: true,
        effect: "coverflow",
      },
      imgLoaded: true
    };
  },
  methods: {
    imgLoad() {
      if(this.imgLoaded){
        this.$emit('imgLoad');
        this.imgLoaded = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.banner /deep/ .swiper-container {
  img {
    width: 100%;
    height: 200px;
  }
  .swiper-pagination-bullet-active {
    background-color: #f40;
  }
}
</style>