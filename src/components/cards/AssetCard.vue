<template>
    <div class="asset__card">
        <div class="img__container">
            <img src="../../assets/imgs/house.png" :alt="`${title}`">
            <app-tag content="Own To Earn" :bg-color="'primary'" />
            <app-heart :active="saved" />
            <div class="banner text-white">
                <h4>{{ title }}</h4>
                <div class="location__size flex gap-5">
                    <p>{{ location }}</p>
                    <p>{{ size }}</p>
                </div>
            </div>
        </div>
        <div class="ac-content text-teal-dark mb-4">
            <div class="asset-type__asset-return flex items-center justify-between mb-2">
                <p>{{ assetType }}</p>
                <p class="text-teal">Return: ${{ assetReturn }}%</p>
            </div>
            <div class="flex items-center justify-between">
                <div class="unit-cost__duration">
                    <p class="mt-0 mb-2">Duration: <span class="text-teal">{{ duration }} weeks</span></p>
                    <h5 class="font-bold">Unit Cost: <span class="text-teal">{{ unitCost }}</span></h5>
                </div>
                <button class="bg-orange py-3 px-5 text-white rounded-md">See More</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppTag from '../AppTag.vue';
import AppHeart from '../AppHeart.vue';

defineProps({
    title: String,
    duration: String,
    location: String,
    unitCost: String,
    assetReturn: String,
    saved: Boolean,
    assetType: String,
    size: String
})
</script>

<style lang="scss" scoped>
.asset__card {
    background-color: #F5FEFF;
    width: 334px;
    padding: 9px;
    border: 0.3px solid #63C7D3;
    border-radius: 10px;

    .img__container {
        position: relative;

        width: 314px;
        height: 210px;
        margin-bottom: 9px;

        img {
            border-radius: 9px;
            object-fit: cover;
        }

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

        .banner {
            width: 100%;
            position: absolute;
            bottom: 0;
            border-radius: 8px;
            background: linear-gradient(90deg, rgba(6, 147, 165, 0.90) 23.27%, rgba(6, 147, 165, 0.56) 100%);
            padding: 9px 14px;

            h4 {
                font-weight: 700;
                line-height: normal;
                font-size: 1.25em;
            }

            .location__size {
                p {
                    line-height: normal;
                    margin: 0;
                }
            }
        }
    }

    .ac-content {
        color: #0F4C59;

        .asset-type__asset-return {
            // display:;
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

            p {
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