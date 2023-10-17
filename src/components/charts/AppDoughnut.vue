<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3';
import { computed, ref } from 'vue';

Chart.register(...registerables);

const chartData = computed(() => ({
    labels: ['Assets', 'Payouts', 'Savings'],
    datasets: [
        {
            data: [16, 40, 20],
            backgroundColor: [
                "#602FC9",
                "#F2A635",
                "#C63DC9"
            ]
        },
    ],
}))


const { doughnutChartProps, doughnutChartRef } = useDoughnutChart({
    chartData,
});
</script>

<template>
    <div class="doughnut">

        <div class="doughnut-chart__wrapper">
            <small>All values are in thousand.</small>
            <DoughnutChart v-bind="doughnutChartProps" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.tabs__root {
    display: flex;
    align-items: center;

    p {
        margin-top: 0;
        font-size: 0.8125em;
    }
}
</style>