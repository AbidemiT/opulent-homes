<template>
  <!-- has-cash -->
  <div class="account-card cash-account has-cash">
    <div class="ac-header">
      <span class="-icon"><i class="wallet"></i></span>
      <h3>
        My Cash Account
        <span>MAIN ACCOUNT</span>
      </h3>
    </div>
    <div>
      <h2>$0.00</h2>
      <p>
        Available balance:
        <b>$0.00</b>
      </p>
    </div>
    <div class="ac-footer">
      <p>
        Bank Details
        <span>NOT AVAILABLE</span>
      </p>
      <button class="card-btn no-bg right" to="/dashboard/savings">
        <i class="-icon"></i>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  data: Object,
})
</script>
<style lang=""></style>
