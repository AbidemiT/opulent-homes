<template>
  <div class="table-card">
    <div class="tc-section">
      <div class="tc-main">
        <div class="img-view" v-if="img !== ''" @click="handleDetails('343')">
          <img src="@/assets/imgs/house.png" />
        </div>
        <span v-else class="-icon">
          <i class="transactions"></i>
        </span>
        <div class="tc-main-content">
          <h4 @click="handleDetails('343')">Assets Purchase</h4>
          <p>
            20 Jun, 2023 | Amount:
            <b>$360,000</b>
          </p>
        </div>
      </div>
      <div class="tc-info-view" v-if="accountType">
        <p>Transaction Account</p>
        <div>{{ accountType }}</div>
      </div>
    </div>
    <div class="tc-info">
      <!-- success, pending, processing -->
      <span class="tag success" :class="status">{{ status }}</span>
      <p>Ref: TRX9735374u6476</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps({
  status: String,
  ref: String,
  amount: Number,
  date: String,
  img: String,
  accountType: String
})

const router = useRouter()

function handleDetails(id: String) {
  router.push(`/dashboard/savings/${id}/details`)
}
</script>
<style lang=""></style>
