<template>
  <div class="grid-30-70">
    <div class="app_card m300">
      <h2>Savings</h2>
      <div class="no-infor">
        <span class="-icon">
          <i class="transactions"></i>
        </span>
        <h5>No Transactions Yet</h5>
        <p>Every transaction is shown here</p>
        <button class="card-btn primary-button">
          <i class="-icon"></i>
          Add Savings Account
        </button>
      </div>
    </div>

    <div class="app_card">
      <h2>Recent Transactions</h2>
      <div class="table-card-list">
        <TransactionCard
          v-for="(item, index) in [
            { status: 'success', img: 'asdfas'  },
            { status: 'pending', img: ''},
            { status: 'pending', img: 'asdfasdf' },
            { status: 'pending', img: ''},
            { status: 'processing', img: 'asdfasdf' }
          ]"
          :key="index"
          :img="item.img"
          :status="item.status"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TransactionCard from '@/components/transaction/TransactionCard.vue'
</script>
<style lang=""></style>
