<template>
  <div id='swiper'>
    <p>swiper demo</p>
    <swiper ref='swiper'
      class='swiper-style'
      :options="swiperOption"
      @slideChangeTransitionStart='handleChange'>
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <div class="swiper-pagination"
        slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'swiper-demo',
  data: function () {
    return {
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 1000
        },
        initialSlide: 0
      }
    }
  },
  compouted: {},
  watch: {},
  methods: {
    handleChange: function () {
      console.log(this.$refs.swiper.swiper.realIndex)
    }
  },
  mounted: function () {
    console.log(this.$refs.swiper.swiper.realIndex)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swiper-style {
  height: 500px;
  background-color: burlywood;
}
.swiper-slide {
  width: 300px;
}
</style>
