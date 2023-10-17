<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="assets__wrapper">
        <div class="assets">
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
        </div>
        <div class="assets__tabs">
            <TabsRoot default-value="PA">
                <TabsList class="tabs-list">
                    <TabsTrigger class="tabs-trigger" value="PA">Purchased Assets</TabsTrigger>
                    <TabsTrigger class="tabs-trigger" value="PI">Pending Installments</TabsTrigger>
                    <TabsTrigger class="tabs-trigger" value="SA">Saved Assets</TabsTrigger>
                </TabsList>
                <TabsContent class="tabs-content" value="PA">
                    <div class="asset_cards">
                        <template v-for="({ title, duration, location, assetYield, unitCost }, i) in availableAssets"
                            :key="i">
                            <asset-card :title="title" :duration="duration" :location="location" :asset-yield="assetYield"
                                :unit-cost="unitCost" />
                        </template>
                    </div>
                </TabsContent>
                <TabsContent class="tabs-content" value="PI">We are here</TabsContent>
                <TabsContent class="tabs-content" value="SA">Nice Outing</TabsContent>
            </TabsRoot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'

import AssetCard from "../../../components/cards/AssetCard.vue";
import OverviewCard from "@/components/cards/OverviewCard.vue";
import TransactionCard from '@/components/cards/TransactionCard.vue';
import { Chart, registerables } from 'chart.js';
import { LineChart, useLineChart } from 'vue-chart-3';
import { computed } from 'vue';

Chart.register(...registerables);

const chartData = computed(() => ({
    labels: ['Jan - Mar', 'Apr - Jun', 'Jul - Sept', 'Oct - Dec',],
    datasets: [
        {
            label: "Payout",
            data: [80, 45, 40, 5],
            fill: false,
            clip: true,
            borderColor: '#F2A635',
            backgroundColor: '#F2A635',
            pointHoverBackgroundColor: '#F2A635'
        },
        {
            label: "Assets",
            data: [65, 65, 55, 55, 45, 40, 25],
            fill: false,
            borderColor: '#602FC9',
            backgroundColor: '#602FC9',
        },
        {
            label: "Savings",
            data: [40, 80, 100],
            fill: false,
            borderColor: '#C63DC9',
            backgroundColor: '#C63DC9',
        },
    ],
}))


const { lineChartProps, lineChartRef } = useLineChart({
    chartData,
});

const transactions = [
    {
        title: "Total Assets",
        amount: 15,
        type: 'purchased'
    },
    {
        title: "Assets sold out",
        amount: 6,
        type: 'payout'
    },
    {
        title: "Total Yield",
        amount: 30,
        type: 'withdrawal'
    }
]
const availableAssets = [
    {
        title: "Amberville Project Ekpe. Lagos NG",
        duration: "36 weeks",
        location: "Lagos Nigeria",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "Lamborghini New Model, Fresh",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "45,000 SQM Land, Lekki Lagos, NG.",
        duration: "36 weeks",
        location: "Lagos Nigeria",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
    {
        title: "Estate Bulloz - 40SQM Plus Land",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
{
        title: "Lamborghini New Model, Fresh",
        duration: "36 weeks",
        location: "Vancouver, Canada",
        assetYield: " $2% /annum",
        unitCost: "$600k"

},
];
</script>

<style scoped lang="scss">
.tabs-list {
    border-bottom: 1px solid #D5E1EE;
    margin-bottom: 30px;

    .tabs-trigger {
        padding: 9px;
        font-weight: 500;
        color: #7C859E;

        &[data-state="active"] {
            color: #0593A5;
            border-bottom: 4px solid #0593A5;
        }
    }
}

.assets__wrapper {
    width: 1116px;

    .assets__tabs,
    .assets {
        border-radius: 15px;
        background: #FFF;
        padding: 30px;
    }

    .assets__tabs {
        .asset_cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 30px;
            row-gap: 45px;
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
                border-left: 2px solid #D5E1EE;
                border-right: 2px solid #D5E1EE;
                padding-left: 37px;
                padding-right: 37px;
            }
        }
    }
}</style>