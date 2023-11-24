<template>
  <div class="dashboard__wrapper">
    <div class="app_card">
      <div class="grid-70-30">
        <!-- Card type -->
        <SavingsCard :savings="userData.savings" :handleClick="handleCashAccount" />

        <div class="card btn-card">
          <div class="header">Quick Actions</div>
          <div class="card-body">
            <button class="c-btn with-icon withdraw">
              <span class="-icon"><i class="plus-icon"></i></span>
              Withdraw To Cash Account
            </button>
            <button class="c-btn with-icon add-money">
              <span class="-icon"><i class="plus-icon"></i></span>
              Add Money
            </button>
            <button class="c-btn with-icon settings">
              <span class="-icon"><i class="plus-icon"></i></span>
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="app_card">
      <div class="grid-30-70">
        <SavingsCard :savings="userData.savings" :handleClick="handleCashAccount" />
        <div class="list-cards">
          <div v-for="(item, index) in [1, 2, 3, 4]" :key="index" class="fl-card">
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
    </div>

    <div class="app_card">
      <div class="card-view-title">
        <h2>Recent Transactions</h2>
        <button class="card-btn">View More</button>
      </div>
      <div class="table-card-list">
        <TransactionCard
          v-for="(item, index) in [
            { status: 'success', accountType: 'main account', img: 'asdfas' },
            { status: 'pending', accountType: 'main account', img: '' },
            { status: 'pending', accountType: 'investment savings', img: 'asdfasdf' },
            { status: 'pending', accountType: 'main account', img: '' },
            { status: 'processing', accountType: 'investment savings', img: 'asdfasdf' }
          ]"
          :key="index"
          :img="item.img"
          :status="item.status"
          :accountType="item.accountType"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SavingsCard from '@/components/SavingsCard.vue'
import TransactionCard from '@/components/transaction/TransactionCard.vue'
import { ref } from 'vue'

const userData = ref({
  savings: 220,
  transactions: 0
})

/* Functions */
function handleCashAccount() {
  console.log('Handle Popup')
}
</script>
<style lang=""></style>
