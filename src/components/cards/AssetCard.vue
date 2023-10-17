<template>
    <div class="asset__card">
        <div class="img__container">
            <img src="../../assets/imgs/house.png" :alt="`${title}`">
            <app-tag content="Own To Earn" :bg-color="'primary'"/>
            <app-heart/>
        </div>
        <div class="ac-content">
            <small class="ac-location"><span class="-icon"><i class="location"></i></span>{{location }}</small>
            <h4>{{ title }}</h4>
            <div class="duration__yield">
                <p>Duration: {{ duration }}</p>
                <p>Yield: {{ assetYield }}</p>
            </div>
            <h5>Unit Cost: {{ unitCost }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppTag from '../AppTag.vue';
import AppHeart from '../AppHeart.vue';

defineProps({
    title: String,
    duration: String,
    type: String,
    location: String,
    unitCost: String,
    assetYield: String,
})
</script>

<style lang="scss" scoped>
.asset__card {
    background-color: #F5FEFF;
    width: 313px;
    height: 272px;
    padding: 9px;
    border-radius: 10px;
    .img__container {
        position: relative;
        border-radius: 9px;
        width: 295px;
        height: 145px;
        margin-bottom: 9px;

        .app-tag__wrapper {
            position: absolute;
            left: 10px;
            top: 10px;
        }
        .app-heart__wrapper {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }

    .ac-content {
        color:#0F4C59;
        .ac-location {
            color: #7B9CAF;
            font-size: 0.8125em;
            display: flex;
            align-items: center;
            column-gap: 7px;
            margin-bottom: 8px;

            .-icon {
                width: 11px;
                height: 14px;
            }
        }

        h4 {
            font-size: 1em;
            font-weight: 700;
        }

        h5 {
            font-weight: 700;
            font-size: 0.875em;
        }

        .duration__yield {
            display: flex;
            align-items: center;
            column-gap: 8px;
            margin-bottom: 4px;

            p{
                font-size: 0.875em;
                color: #13804C;

                &:first-of-type {
                    color: #0F4C59;
                }
            }
        }
    }
}
</style>