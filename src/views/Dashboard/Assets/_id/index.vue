<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="assets__wrapper">
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
            <!-- <apexchart width="380" type="donut" :options="{
                        plotOptions: {
                            pie: {
                                startAngle: 0,
                                endAngle: 360,
                                donut: {
                                    size: '65%',
                                    background: 'transparent',
                                    show: false,
                                    labels: {
                                        show: true,
                                        name: {
                                            show: true,
                                            color: '#7C859E'
                                        },
                                        value: {
                                            show: true,
                                            color: '#9F35F2'
                                        },
                                        total: {
                                            show: true,
                                            label: 'Funded'
                                        }
                                    }
                                }
                            }
                        }
                    }" :series="[50]"></apexchart> -->
          </div>
          <div class="calculator__container">
            <!-- <CalculateEarnings/> -->
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
            <AssetDetails />
          </TabsContent>
          <TabsContent class="tabs-content" value="faqs">
            <div class="question-faqs__wrapper">
              <TabsRoot default-value="main-faqs" orientation="vertical" class="inner">
                <TabsList class="inner-tabs-list">
                  <TabsTrigger class="inner-tabs-trigger" value="main-faqs">FAQs</TabsTrigger>
                  <TabsTrigger class="inner-tabs-trigger" value="question">
                    Ask a Question
                  </TabsTrigger>
                </TabsList>
                <div class="inner-tabs-content__container">
                  <TabsContent class="inner-tabs-content" value="question">
                    <QuestionForm />
                  </TabsContent>
                  <div class="faqs-content__container">
                    <!-- <p>General questions we get often</p> -->
                    <TabsContent class="inner-tabs-content" value="main-faqs">
                      <div class="question-faqs__wrapper">
                        <FAQs />
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </TabsRoot>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import AppTag from '@/components/AppTag.vue'
import AssetCarousel from '../components/AssetCarousel.vue'
import FAQs from '../components/FAQs.vue'
import QuestionForm from '../components/QuestionForm.vue'
import AssetDetails from '../components/AssetDetails.vue'
import CalculateEarnings from '../components/CalculateEarnings.vue'

const router = useRouter()

const idParam: Ref<string> = ref('')

idParam.value = router.currentRoute.value.params.id

const slides = [
  'https://source.unsplash.com/random?woman',
  'https://source.unsplash.com/random?man',
  'https://source.unsplash.com/random?city',
  'https://source.unsplash.com/random?fruit',
  'https://source.unsplash.com/random?house'
]
</script>

<style scoped lang="scss">
.bottom {
  margin-top: 35px;
  display: grid;
  //   grid-template-columns: 413px 262px 326px;
  grid-template-columns: 413px 262px;
  justify-content: space-between;
  column-gap: 30px;

  .carousel__container {
    .asset-dates {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;

      .date {
        p {
          color: #7c859e;
          font-size: 0.75em;
        }

        h3 {
          color: #0f4c59;
          font-weight: 700;
          font-size: 0.875em;
        }
      }
    }
  }
}

.question-faqs__wrapper {
  .inner {
    display: flex;
    // justify-content: space-between;
    column-gap: 120px;

    &-tabs-list {
      display: flex;
      flex-direction: column;
    }

    &-tabs-trigger {
      width: 100px;
      text-align: left;
      color: #7c859e;
      font-size: 0.875em;
      margin-bottom: 35px;

      &[data-state='active'] {
        color: #02b8cf;
        font-weight: 700;
      }
    }

    .inner-tabs-content__container {
      border-radius: 7px;
      border: 1px solid #d5e1ee;
      background: #fff;
      padding: 30px;
      font-size: 0.875em;

      .inner-tabs-content {
        width: 100%;
        color: #576077;
      }

      .faqs-content__container {
        p {
          font-weight: 500;
          margin-bottom: 40px;
        }
      }
    }
  }
}
@media (max-width: 869px) {
  .asset-details__wrapper {
    .detail-row {
      grid-template-columns: 1fr;
    }
  }
}
@media (max-width: 590px) {
  .info-display__wrapper {
    .top {
      flex-wrap: wrap;
    }
    &.px-12 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .left-content {
      flex-wrap: wrap;
      row-gap: 10px;
    }
    .tags {
      margin-left: 0;
      margin-bottom: 10px;
    }
    .bottom {
      grid-template-columns: 100%;
    }
  }
  .asset-details__tabs__wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
