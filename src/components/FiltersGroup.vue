<template>
    <div class="filters__group__wrapper">
        <div class="cost">
            <p class="flex">Cost: ${{ cost[0] }}</p>
            <SliderRoot v-model="cost" class="relative flex items-center select-none touch-none w-[200px] h-5"
            :max="1000000" :step="10000">
                <SliderTrack class="relative grow rounded-full h-[3px]">
                    <SliderRange class="absolute bg-green-light rounded-full h-full" />
                </SliderTrack>
                <SliderThumb
                    class="block w-5 h-5 bg-blue-light rounded-[10px] hover:bg-violet3 focus:outline-none"
                    aria-label="Volume" />
            </SliderRoot>
        </div>
        <div class="duration">
            <p class="flex">Duration: {{ duration[0] }} months</p>
            <SliderRoot v-model="duration" class="relative flex items-center select-none touch-none w-[200px] h-5"
            :max="64" :step="1">
                <SliderTrack class="relative grow rounded-full h-[3px]">
                    <SliderRange class="absolute bg-green-light rounded-full h-full" />
                </SliderTrack>
                <SliderThumb
                    class="block w-5 h-5 bg-blue-light rounded-[10px] hover:bg-violet3 focus:outline-none"
                    aria-label="Volume" />
            </SliderRoot>
        </div>
        .asset-typoe
        <span class="-icon"><i class="three-dots"></i></span>
    </div>
</template>

<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'
import { ref } from 'vue';

const cost = ref([20000]);
const duration = ref([32]);
</script>

<style scoped lang="scss">
.filters__group__wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: 210px 123px 161px 156px 237px 24px;
    column-gap: 24px;
    margin-bottom: 40px;

    #slider-root {
        width: 100%;
        position: relative;
        display: block;
        display: flex;
        align-items: center;
        user-select: none;
        touch-action: none;

        #slider-track {
            position: relative;
            background: #0000008a;
            flex-grow: 1;
            width: 3px;
            height: 3px;
            border-radius: 50%;
        }
    }

    p {
        font-size: 0.8125em;
    }
}
</style>