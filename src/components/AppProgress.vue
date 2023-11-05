<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'radix-vue'

defineProps({
    profileProgressValue: {
        type: Number,
        default: 40
    },
    width: String
})

// const progressValue = ref(0)

// onMounted(() => {
//   const timer = setTimeout(() => (progressValue.value = 0), 500)
//   return () => clearTimeout(timer)
// })
</script>

<template>
  <ProgressRoot
    class="relative overflow-hidden bg-blackA9 rounded-full w-4/5 sm:w-[550px] h-4 sm:h-3"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator
      class="bg-orange rounded-full w-full h-3 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
      :style="`transform: translateX(-${100 - profileProgressValue}%)`"
    />
  </ProgressRoot>
</template>