<template>
  <!-- has-cash, disabled, has-savings -->
  <div class="account-card cash-account" :class="transactions ? 'has-savings' : 'disabled'">
    <div class="ac-header">
      <template v-if="transactions">
        <span class="-icon"><i class="wallet"></i></span>
        <h3>Total Transaction</h3>
      </template>
    </div>
    <div v-if="transactions">
      <h2>${{ transactions?.toFixed(2) }}</h2>
      <p>1 Account</p>
    </div>
    <div class="note-wrapper" v-else>
      <span class="-icon">
        <i class="account-download"></i>
      </span>
      <p>No Savings Account</p>
      <p><small>Setup Cash Account First</small></p>
    </div>
    <div>
      <div class="ac-footer" v-if="!transactions">
        <p>Create Savings Account</p>
        <button class="card-btn no-bg right" to="/dashboard/savings">
          <i class="-icon"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  amount: Number,
  savings: Number,
  transactions: Number
})
</script>
<style lang="ts"></style>
