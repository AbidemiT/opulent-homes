<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { LineChart, useLineChart } from 'vue-chart-3';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue';
import { computed, ref } from 'vue';

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
</script>

<template>
    <div class="graph">
        <TabsRoot class="tabs__root">
            <p>Show data for:</p>
            <TabsList class="tabs-list">
                <TabsTrigger class="tabs-trigger" :value="'days'">Last 30 days</TabsTrigger>
                <TabsTrigger class="tabs-trigger" :value="'week'">This week</TabsTrigger>
                <TabsTrigger class="tabs-trigger" :value="'all'">All time</TabsTrigger>
            </TabsList>
            <!-- <TabsContent /> -->
        </TabsRoot>

        <div class="line-chart__wrapper">
            <LineChart v-bind="lineChartProps" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.tabs__root {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    justify-content: flex-end;

    p {
        margin-top: 0;
        font-size: 0.8125em;
        margin-right: 7px;
    }

    .tabs-list {
        color: #7C859E;

        .tabs-trigger {
            font-size: 0.875em;
            padding: 6px 11px;

            &[data-active="true"] {
                border-radius: 8px;
                background: #DEE8EE;
                color: #151616;
            }
        }
    }
}
</style>