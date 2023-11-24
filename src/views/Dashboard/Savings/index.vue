<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard__wrapper">
    <div class="app_card">
      <h2>Savings Accounts</h2>
      <div class="grid-equal">
        <SavingsCard :savings="userData.savings" :handleClick="handleCashAccount" />
        <SavingsTransCard :transactions="0" />
      </div>
    </div>

    <NoTransaction />

    <TransNoSavings />

    <div class="grid-30-70">
      <div class="app_card m300">
        <h2>Savings</h2>
        <div class="flat-card-list">
          <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 7]" :key="index" class="fl-card">
            <div class="fl-header">
              <h5>INVESTMENT SAVINGS</h5>
              <span class="-icon"><i class="arrow-right"></i></span>
            </div>
            <div>
              <span>Target Amount:</span>
              <span>$200, 000</span>
            </div>
            <div>
              <span>Target Duration:</span>
              <span>3 Months</span>
            </div>
          </div>
        </div>
      </div>

      <div class="app_card">
        <h2>Recent Transactions</h2>
        <div class="table-card-list">
          <div
            v-for="(item, index) in [
              { status: 'success' },
              { status: 'pending' },
              { status: 'pending' },
              { status: 'pending' },
              { status: 'processing' }
            ]"
            :key="index"
            class="table-card"
          >
            <div class="tc-main">
              <div class="img-view">
                <img src="@/assets/imgs/house.png" />
              </div>
              <!-- <span class="-icon">
                <i class="transactions"></i>
              </span> -->
              <div class="tc-main-content">
                <h4>Assets Purchase</h4>
                <p>
                  20 Jun, 2023 | Amount:
                  <b>$360,000</b>
                </p>
              </div>
            </div>
            <div class="tc-info">
              <!-- success, pending, processing -->
              <span class="tag success" :class="item.status">{{ item.status }}</span>
              <p>Ref: TRX9735374u6476</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import type SavingsCard from '@/components/cards/SavingsCard.vue';
import SavingsCard from '@/components/SavingsCard.vue'
import SavingsTransCard from '@/components/SavingsTransCard.vue'
import NoTransaction from '@/components/nodata/NoTransaction.vue'
import TransNoSavings from '@/components/nodata/TransNoSavings.vue'
import { ref } from 'vue'

const userData = ref({
  savings: 0,
  transactions: 0
})

/* Functions */
function handleCashAccount() {
  console.log('Handle Popup')
}
</script>
