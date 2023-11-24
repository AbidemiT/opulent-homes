<template>
  <!-- has-cash -->
  <div class="account-card cash-account" :class="savings ? 'has-cash' : ''">
    <div class="ac-header">
      <span class="-icon"><i class="wallet"></i></span>
      <h3>
        My Cash Account
        <span>MAIN ACCOUNT</span>
      </h3>
    </div>
    <div>
      <h2>${{ savings?.toFixed(2) }}</h2>
      <p>
        Available balance:
        <b>${{ savings?.toFixed(2) }}</b>
      </p>
    </div>
    <div>
      <div class="ac-footer" v-if="savings === 0">
        <p>
          Bank Details
          <span>NOT AVAILABLE</span>
        </p>
        <CashSetupModal />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CashSetupModal from '@/components/CashSetupModal.vue';
defineProps({
  savings: Number,
  handleClick: Function
})
</script>
<style lang=""></style>
