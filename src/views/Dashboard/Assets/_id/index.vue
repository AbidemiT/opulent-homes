<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="assets__wrapper">
    <div class="asset__details__wrapper">
      <div class="info-display__wrapper bg-white rounded-2xl">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h3 class="">{{ idParam }}</h3>
            <div class="tags flex justify-between gap-2 ml-5">
              <app-tag content="Own To Earn" :bg-color="'success'" />
              <app-tag content="Payment Plan" :bg-color="'danger'" />
            </div>
          </div>
          <div class="right">
            <button class="app-btn orang-btn">Invest</button>
          </div>
        </div>

        <div class="details-stat py-7">
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
          <div class="asset-funding-progress__container chart-data">
            <apexchart
              width="280"
              type="donut"
              :options="{
                legend: false,
                fill: {
                  type: 'gradient'
                },
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
              }"
              :series="[50]"
            ></apexchart>
            <div class="layout-fields mb-[15px]">
              <div class="input-container">
                <label for="rent_income">Number of Units</label>
                <p>3 Months</p>
              </div>
              <div class="input-container">
                <label for="amout">Amount</label>
                <p>2%</p>
              </div>
            </div>
          </div>
          <div class="calculator__container">
            <CalculateEarnings />
          </div>
        </div>
        <div class="details-stat py-7">
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
          <div class="asset-funding-progress__container chart-data">
            <apexchart
              width="280"
              type="donut"
              :options="{
                legend: false,
                fill: {
                  type: 'gradient'
                },
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
              }"
              :series="[50]"
            ></apexchart>
            <div class="layout-fields mb-[15px]">
              <div class="input-container">
                <label for="rent_income">Number of Units</label>
                <p>3 Months</p>
              </div>
              <div class="input-container">
                <label for="amout">Amount</label>
                <p>2%</p>
              </div>
            </div>
          </div>
          <div class="review-report">
            <div class="wrap-icon">
              <span class="-icon"><i class="report-icon"></i></span>
            </div>
            <button class="app-btn btn-block">View Report</button>
          </div>
        </div>
      </div>

      <div class="info-display__wrapper bg-white rounded-2xl">
        <div class="flex justify-between items-center">
          <div class="flex">
            <h3 class="">Asset Financial Overview</h3>
          </div>
        </div>
        <FinancialStat />
      </div>

      <!-- End Stat details -->

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

      <div class="asset-details__tabs__wrapper bg-white rounded-2xl py-9 px-12 mt-2">
        <TabsRoot default-value="availableAsset">
          <TabsList class="tabs-list">
            <TabsTrigger class="tabs-trigger" value="availableAsset">Available Assets</TabsTrigger>
            <TabsTrigger class="tabs-trigger" value="myAsset">My Assets</TabsTrigger>
            <TabsTrigger class="tabs-trigger" value="pendingInstallments">
              Pending Installments
            </TabsTrigger>
            <TabsTrigger class="tabs-trigger" value="savedAssets">Saved Assets</TabsTrigger>
          </TabsList>
          <TabsContent class="tabs-content" value="availableAsset">
            <AvailableAssets />
          </TabsContent>
          <TabsContent class="tabs-content" value="myAsset">
            <MyAssets />
          </TabsContent>
          <TabsContent class="tabs-content" value="pendingInstallments">
            <SavedAssets />
          </TabsContent>
          <TabsContent class="tabs-content" value="savedAssets">
            <PendingInstallments />
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
import AvailableAssets from '@/components/assets/AvailableAssets.vue'
import MyAssets from '@/components/assets/MyAssets.vue'
import SavedAssets from '@/components/assets/SavedAssets.vue'
import PendingInstallments from '@/components/assets/PendingInstallments.vue'
import FinancialStat from '@/components/assets/FinancialStat.vue'

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
    }
  }
}
.date {
  p {
    color: #7c859e;
    font-size: 12px;
  }

  h3 {
    color: #0f4c59;
    font-weight: 700;
    font-size: 14px;
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

.chart-data {
  label {
    font-size: 10px;
    color: #7c859e;
  }
  .layout-fields {
    display: flex;
    column-gap: 10px;
    padding-top: 10px;
  }

  .input-container {
    background-color: #edfcff;
    height: 50px;
    padding: 0px 10px;
    position: relative;
    width: 50%;
    border-radius: 5px;
    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(4) {
      width: 50%;
    }
    &.resize {
      width: 28%;
    }
    p {
      font-family: 'Satoshi';
      font-weight: 700;
      font-size: 15px;
      color: #0f4c59;
      margin-top: 3px;
    }
  }
}

.info-display__wrapper {
  padding: 20px;
}

@media (max-width: 869px) {
  .details-stat {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
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
