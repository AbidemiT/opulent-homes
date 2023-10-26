<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="asset__details__wrapper">
        <div class="info-display__wrapper bg-white rounded-2xl py-9 px-12">
            <div class="top flex justify-between">
                <div class="left-content flex justify-between">
                    <h3 class="font-bold text-green-900">{{ idParam }}</h3>
                    <div class="tags flex justify-between gap-2 ml-5">
                        <app-tag content="Own To Earn" :bg-color="'success'" />
                        <app-tag content="Payment Plan" :bg-color="'danger'" />
                    </div>
                </div>
                <div class="right">
                    <button class="bg-orange py-3 px-5 text-white rounded-md">Invest</button>
                </div>
            </div>
            <div class="bottom">
                <div class="carousel__container">
                    <asset-carousel :slides="slides" />
                    <div class="asset-dates flex justify-between">
                        <div class="date">
                            <p>Asset Launch Date</p>
                            <h3>12 Janauary, 2024</h3>
                        </div>
                        <div class="date">
                            <p>Asset Closing Date</p>
                            <h3>12 Janauary, 2024</h3>
                        </div>
                    </div>
                </div>
                <div class="asset-funding-progress__container">

                </div>
                <div class="calculator__container">

                </div>
            </div>
        </div>
        <div class="asset-details__tabs__wrapper bg-white rounded-2xl py-9 px-12 mt-2">
            <TabsRoot default-value="details">
                <TabsList class="tabs-list">
                    <TabsTrigger class="tabs-trigger" value="details">Details</TabsTrigger>
                    <TabsTrigger class="tabs-trigger" value="faqs">FAQs</TabsTrigger>
                </TabsList>
                <TabsContent class="tabs-content" value="details">
                    <h1>Details</h1>
                </TabsContent>
                <TabsContent class="tabs-content" value="faqs">
                    <h1>FAQs</h1>
                </TabsContent>
            </TabsRoot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import AppTag from '@/components/AppTag.vue';
import AssetCarousel from "../components/AssetCarousel.vue";

const router = useRouter();

const idParam: Ref<string> = ref("");

idParam.value = router.currentRoute.value.params.id;


const slides = ["https://source.unsplash.com/random?woman", "https://source.unsplash.com/random?man", "https://source.unsplash.com/random?city", "https://source.unsplash.com/random?fruit", "https://source.unsplash.com/random?house"]

</script>

<style scoped lang="scss">
.bottom {
    margin-top: 35px;
    display: grid;
    grid-template-columns: 413px 262px 326px;
    column-gap: 30px;

    .carousel__container {
        .asset-dates {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;

            .date {
                p {
                    color: #7C859E;
                    font-size: 0.75em;
                }

                h3 {
                    color: #0F4C59;
                    font-weight: 700;
                    font-size: 0.875em;
                }
            }
        }
    }
}
</style>