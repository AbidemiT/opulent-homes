<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard__wrapper">
    <div class="app_card">
      <h2>Savings Accounts</h2>
      <div class="grid-equal">
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
        <!-- has-cash, disabled -->
        <div class="account-card cash-account has-savings">
          <div class="ac-header">
            <span class="-icon"><i class="wallet"></i></span>
            <h3>
              My Cash Account
            </h3>
          </div>
          <div>
            <h2>$0.00</h2>
            <p>
              Available balance:
              <b>$0.00</b>
            </p>
          </div>
          <!-- <div class="note-wrapper">
            <span class="-icon">
              <i class="account-download"></i>
            </span>
            <p>No Savings Account</p>
            <p><small>Setup Cash Account First</small></p>
          </div> -->
          <div class="ac-footer">
            <p>Create Savings Account</p>
            <button class="card-btn no-bg right" to="/dashboard/savings">
              <i class="-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="app_card">
      <div class="card-view-title">
        <h2>Recent Transactions</h2>
        <button class="card-btn">View More</button>
      </div>
      <div class="no-infor">
        <span class="-icon">
          <i class="transactions"></i>
        </span>
        <h5>No Transactions Yet</h5>
        <p>Every transaction is shown here</p>
      </div>
    </div>

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
