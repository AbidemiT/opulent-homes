<template>
  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="(slide, idx) in slides" :key="idx">
      <div class="carousel__item">
        <img :src="slide" alt="Property image" />
      </div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="(slide, idx) in slides" :key="idx">
      <div class="carousel__item" @click="slideTo(idx)">
        <img :src="slide" alt="Property image" />
      </div>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

defineProps({
  slides: Object
})

const currentSlide = ref(0)

const slideTo = (val) => {
  currentSlide.value = val
  console.log({ val })
}
</script>

<style setup lang="scss">
.carousel {
  .carousel__viewport {
    .carousel__track {
      .carousel__slide {
        // &--active {
        //     background: yellow;
        // }
        .carousel__item {
          width: 412px;
          height: 209px;

          img {
            border-radius: 16px;
            object-fit: cover;
          }
        }
      }
    }
  }
}

#thumbnails {
  margin-top: 12px;

  .carousel__viewport {
    .carousel__track {
      column-gap: 11px;

      .carousel__slide {
        // &--active {
        //     background: yellow;
        // }
        .carousel__item {
          // width: 70px;
          // height: 50px;
          width: 100%;
          height: 75px;
          cursor: pointer;

          img {
            border-radius: 6px;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
