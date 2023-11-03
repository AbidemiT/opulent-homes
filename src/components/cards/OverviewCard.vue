<template>
    <div class="overview__card" :class="bgColor">
        <div class="top">
            <span class="title">{{ title }}</span>
            <!-- <span class="accounts__count" v-if="accountsCount">{{ `${accountsCount} ${accountsCount > 1 ? 'Accounts' : 'Account'}` }}</span> -->
        </div>
        <h4 v-if="!subscription">N{{ currencyFormatter(amount) }}</h4>
        <h4 v-else>{{ subscription }}</h4>
    </div>
</template>

<script setup lang="ts">
import currencyFormatter from '@/composables/currencyFormatter';

defineProps({
    title: String,
    accountsCount: Number,
    bgColor: String,
    subscription: Number,
    amount: {
        type: Number,
        default: 0,
    }
})
</script>