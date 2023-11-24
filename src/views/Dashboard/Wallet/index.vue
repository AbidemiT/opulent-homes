<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard__wrapper">
    <div class="app_card">
      <div class="custom-layout">
        <div class="balance-card">
          <p>Wallet Balance</p>
          <h2>
            $12,560,092.00
            <span class="-icon"><i class="eye-icon"></i></span>
          </h2>
        </div>
        <div class="pop-card add">
          <span class="-icon"><i class="wallet-add"></i></span>
          <p>Top Up</p>
        </div>
        <div class="pop-card minus">
          <span class="-icon"><i class="wallet-minus"></i></span>
          <p>Withdraw</p>
        </div>
        <div class="flow-card">
          <p>Inflow</p>
          <div>N233,000.00</div>
          <p>Outflow</p>
          <div>N233,000.00</div>
        </div>
      </div>
    </div>

    <div class="grid-30-70">
      <div class="app_card m300" v-if="inforData.banks.length === 0">
        <div class="card-view-title">
          <h2>Bank</h2>
          <button class="card-btn">Add New Bank</button>
        </div>
        <div class="no-infor">
          <span class="-icon">
            <i class="transactions"></i>
          </span>
          <h5>No Bank Account</h5>
          <p>Add bank account</p>
        </div>
      </div>
      <div class="app_card m300 no-pad" v-else>
        <div class="card-view-title pad-inner">
          <h2>Bank</h2>
          <button class="card-btn">Add New Bank</button>
        </div>
        <div class="table-list">
          <table>
            <thead>
              <th>Name</th>
              <th>Bank</th>
              <th>Number</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td>Account Name</td>
                <td>Union Bank</td>
                <td>20943434</td>
                <td><span class="-icon"><i class="delete"></i></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <NoTransaction v-if="inforData.transaction === 0" />
      <div class="app_card" v-else>
        <h2>Recent Transactions</h2>
        <div class="table-card-list">
          <TransactionCard
            v-for="(item, index) in [
              { status: 'success', img: 'asdfas' },
              { status: 'pending', img: '' },
              { status: 'pending', img: 'asdfasdf' },
              { status: 'pending', img: '' },
              { status: 'processing', img: 'asdfasdf' }
            ]"
            :key="index"
            :img="item.img"
            :status="item.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NoTransaction from '@/components/nodata/NoTransaction.vue'
import { ref } from 'vue'

const inforData = ref({
  transaction: 0,
  banks: [
    {
      name: 'Oshokoya Oyinkansola',
      bank: 'Union Bank',
      acc_no: '0923444443'
    }
  ]
})
</script>
