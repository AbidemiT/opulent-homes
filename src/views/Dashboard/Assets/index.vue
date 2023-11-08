<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="assets__wrapper">
    <!-- <div class="assets">
            <h3>Asset Financial Overview</h3>

            <div class="financial__overview">
                <div class="overview__cards">
                    <overview-card title="Total Asset Value" :amount="350000" :bg-color="'blue'" />
                    <overview-card title="Total Expected Payout" :amount="6.857" :bg-color="'cream'" />
                    <overview-card title="This month's payout" :amount="3400" :bg-color="'purple'" />
                </div>
                <div class="assets__breakdown">
                    <template v-for="({ title, amount, type }, i) in transactions" :key="i">
                        <transaction-card :title="title" :amount="amount" :type="type" />
                    </template>
                </div>
                <div class="assets__graph">
                    <LineChart v-bind="lineChartProps" />
                </div>
            </div>
        </div> -->
    <div class="assets__tabs">
      <TabsRoot default-value="AO">
        <TabsList class="tabs-list">
          <TabsTrigger class="tabs-trigger" value="AO">All Offers</TabsTrigger>
          <TabsTrigger class="tabs-trigger" value="MA">My Assets</TabsTrigger>
          <TabsTrigger class="tabs-trigger" value="PI">Pending Installments</TabsTrigger>
          <TabsTrigger class="tabs-trigger" value="SA">Saved Assets</TabsTrigger>
        </TabsList>
        <div class="search__wrapper">
          <div class="search-container">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search by name or location"
            />
            <span class="-icon"><i class="search"></i></span>
          </div>
        </div>
        <TabsContent class="tabs-content" value="AO">
          <div class="asset_cards">
            <template
              v-for="(
                { title, duration, location, assetReturn, unitCost, assetType, size }, i
              ) in availableAssets"
              :key="i"
            >
              <asset-card
                :title="title"
                :duration="duration"
                :location="location"
                :asset-return="assetReturn"
                :asset-type="assetType"
                :size="size"
                :unit-cost="unitCost"
              />
            </template>
          </div>
        </TabsContent>
        <TabsContent class="tabs-content" value="MA">
          <div class="asset_cards">
            <template
              v-for="(
                { title, duration, location, assetReturn, unitCost, assetType, size }, i
              ) in availableAssets"
              :key="i"
            >
              <asset-card
                :title="title"
                :duration="duration"
                :location="location"
                :asset-return="assetReturn"
                :asset-type="assetType"
                :size="size"
                :unit-cost="unitCost"
              />
            </template>
          </div>
        </TabsContent>
        <TabsContent class="tabs-content" value="PI">
          <div class="asset_cards">
            <template
              v-for="(
                { title, duration, location, assetReturn, unitCost, assetType, size }, i
              ) in pendingInstallment"
              :key="i"
            >
              <asset-card
                :title="title"
                :duration="duration"
                :location="location"
                :asset-return="assetReturn"
                :asset-type="assetType"
                :size="size"
                :unit-cost="unitCost"
              />
            </template>
          </div>
        </TabsContent>
        <TabsContent class="tabs-content" value="SA">
          <div class="asset_cards">
            <template
              v-for="(
                { title, duration, location, assetReturn, unitCost, saved, assetType, size }, i
              ) in savedAssets"
              :key="i"
            >
              <asset-card
                :title="title"
                :duration="duration"
                :location="location"
                :asset-return="assetReturn"
                :asset-type="assetType"
                :size="size"
                :unit-cost="unitCost"
                :saved="saved"
              />
            </template>
          </div>
        </TabsContent>
      </TabsRoot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

import AssetCard from '../../../components/cards/AssetCard.vue'
import OverviewCard from '@/components/cards/OverviewCard.vue'
import TransactionCard from '@/components/cards/TransactionCard.vue'
import { Chart, registerables } from 'chart.js'
import { LineChart, useLineChart } from 'vue-chart-3'
import { computed } from 'vue'

Chart.register(...registerables)

const chartData = computed(() => ({
  labels: ['Jan - Mar', 'Apr - Jun', 'Jul - Sept', 'Oct - Dec'],
  datasets: [
    {
      label: 'Payout',
      data: [80, 45, 40, 5],
      fill: false,
      clip: true,
      borderColor: '#F2A635',
      backgroundColor: '#F2A635',
      pointHoverBackgroundColor: '#F2A635'
    },
    {
      label: 'Assets',
      data: [65, 65, 55, 55, 45, 40, 25],
      fill: false,
      borderColor: '#602FC9',
      backgroundColor: '#602FC9'
    },
    {
      label: 'Savings',
      data: [40, 80, 100],
      fill: false,
      borderColor: '#C63DC9',
      backgroundColor: '#C63DC9'
    }
  ]
}))

const { lineChartProps, lineChartRef } = useLineChart({
  chartData
})

const transactions = [
  {
    title: 'Total Assets',
    amount: 15,
    type: 'purchased'
  },
  {
    title: 'Assets sold out',
    amount: 6,
    type: 'payout'
  },
  {
    title: 'Total Yield',
    amount: 30,
    type: 'withdrawal'
  }
]
const savedAssets = [
  {
    title: 'Amberville Project',
    duration: '36',
    location: 'Epe Lagos Nigeria',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Vacant Land'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    saved: true,
    size: '600 sqm',
    assetType: 'Fresh'
  }
]
const pendingInstallment = [
  {
    title: 'Amberville Project',
    duration: '36',
    location: 'Epe Lagos Nigeria',
    assetReturn: '2',
    unitCost: '$600k',
    size: '600 sqm',
    assetType: 'Vacant Land'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    size: '600 sqm',
    assetType: 'Fresh'
  },
  {
    title: 'Amberville Project',
    duration: '36',
    location: 'Epe Lagos Nigeria',
    assetReturn: '2',
    unitCost: '$600k',
    size: '600 sqm',
    assetType: 'Vacant Land'
  },
  {
    title: 'Amberville 2',
    duration: '36',
    location: 'Epe Lagos Nigeria',
    assetReturn: '2',
    unitCost: '$600k',
    size: '600 sqm',
    assetType: 'Vacant Land'
  }
]
const availableAssets = [
  {
    title: 'Amberville Project Ekpe',
    duration: '36',
    location: 'Epe, Lagos State',
    assetReturn: '2',
    unitCost: '$600k',
    size: '600 sqm',
    assetType: 'Vacant Land'
  },
  {
    title: 'Lamborghini New Model',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    assetType: 'Fresh'
  },
  {
    title: 'Amberville 2',
    duration: '36',
    location: 'Epe, Lagos State',
    assetReturn: '2',
    unitCost: '$600k',
    size: '40sqm plus land',
    assetType: 'Vacant Land'
  },
  {
    title: 'Estate Bulloz',
    duration: '36',
    location: 'Vancouver, Canada',
    assetReturn: '2',
    unitCost: '$600k',
    size: ' 40SQM Plus Land',
    assetType: 'Vacant Land'
  }
]
</script>

<style scoped lang="scss">
.assets__wrapper {
  .assets__tabs,
  .assets {
    border-radius: 15px;
    background: #fff;
    padding: 30px;
  }

  .assets__tabs {
    .asset_cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 25px;
      row-gap: 25px;
    }
  }

  .assets {
    margin-bottom: 24px;

    .financial__overview {
      margin-top: 18px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 37px;

      .overview__cards {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 15px;
      }

      .assets__breakdown {
        border-left: 2px solid #d5e1ee;
        border-right: 2px solid #d5e1ee;
        padding-left: 37px;
        padding-right: 37px;
      }
    }
  }
}
@media (max-width: 869px) {
  .assets__wrapper {
    .assets__tabs {
      .asset_cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
}
@media (max-width: 590px) {
  .assets__wrapper {
    .assets__tabs {
      padding: 15px;
      .asset_cards {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
