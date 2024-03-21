<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="dashboard__wrapper">
        <div class="welcome">
            <div class="sm-profile">
                <!-- <div class="profile--img__container">
                    <img src="../../assets/imgs/favicon.png" alt="Profile picture">
                </div> -->
                <h3>Welcome, John Doe</h3>
            </div>
            <small>Quick Overview</small>
            <div class="overview__cards">
                <overview-card title="Wallet Ballance" :amount="350000" :accounts-count="5" />
                <overview-card title="Net Worth" :amount="0" />
                <overview-card title="Subscriptions" :subscription="12" />
            </div>
        </div>
        <div class="charts__container">
            <app-graph />
            <app-doughnut />
        </div>
        <small>Quick Actions</small>
        <div class="action__cards">
            <action-card title="Start Saving" type="savings" description="Build your wealth" />
            <action-card title="Add Money" type="money" description="Fund your account" />
            <action-card title="Invest" type="invest" description="Buy assets with others" />
            <action-card title="Withdraw" type="withdraw" description="Make withdrawal" />
        </div>
        <div class="assets__transactions">
            <available-assets/>
            <recent-transactions/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import OverviewCard from "@/components/cards/OverviewCard.vue";
import ActionCard from "@/components/cards/ActionCard.vue";
import AppGraph from "@/components/charts/AppGraph.vue";
import AppDoughnut from "@/components/charts/AppDoughnut.vue";
import AvailableAssets from "./components/AvailableAssets.vue";
import RecentTransactions from "./components/RecentTransactions.vue";
</script>