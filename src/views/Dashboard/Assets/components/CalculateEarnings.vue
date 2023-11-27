<template>
  <div class="calculate-earnings__wrapper">
    <div class="header-section">
      <h3>Calculate Earning</h3>
      <div>
        <span class="-icon"><i class="info-icon"></i></span>
        <span class="-icon"><i class="max-icon"></i></span>
      </div>
    </div>
    <form action="" class="form">
      <div class="layout-fields">
        <div class="input-container">
          <label for="rent_income">Rent Income(%)</label>
          <input type="number" max="100" name="rent_income" id="rent_income" placeholder="1" />
        </div>
        <div class="input-container">
          <label for="capital_appreciation">Capital Appreciation(%)</label>
          <input
            type="text"
            name="capital_appreciation"
            id="capital_appreciation"
            placeholder="1"
          />
        </div>
        <div class="input-container">
          <label for="duration">Duration(Month)</label>
          <input type="text" name="duration" id="duration" placeholder="3" />
        </div>
      </div>
      <!-- <p>Number of units</p> -->
      <div class="layout-fields mb-[15px]">
        <div class="input-container resize">
          <label for="rent_income">No. of Units</label>
          <input type="text" name="rent_income" id="rent_income" placeholder="1" />
        </div>
        <div class="input-container">
          <label for="amout">Amount</label>
          <input type="text" name="amout" id="amout" placeholder="0" />
        </div>
      </div>
      <button class="app-btn btn-block mb-[10px]">Calculate</button>
      <h3>Result</h3>
      <div class="layout-fields mb-[10px]">
        <div class="input-container">
          <label for="rent_income">Annual Rent</label>
          <p>N20,000</p>
        </div>
        <div class="input-container">
          <label for="capital_appreciation">Capital Appreciation</label>
          <p>30%</p>
        </div>
        <div class="input-container">
          <label for="duration">Total</label>
          <p>N100,000</p>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.calculate-earnings__wrapper {
  border-radius: 15px;
  background: #d6f0ff;
  padding: 12px 18px;
  min-height: 330px;
  .header-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    .-icon {
      background-color: #ccc;
      display: inline-flex;
      margin-left: 10px;
      border-radius: 100%;
    }
  }

  label {
    font-size: 10px;
    color: #7c859e;
  }
  .layout-fields {
    display: flex;
    column-gap: 10px;
    padding-top: 10px;
    input {
      background-color: transparent;
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding-top: 15px;
      padding-left: 10px;
      outline: none !important;
      border: none !important;
      font-family: 'Satoshi';
      font-weight: 700;
      font-size: 15px;
      color: #0f4c59;
    }
  }

  .input-container {
    background-color: #edfcff;
    height: 50px;
    padding: 0px 10px;
    position: relative;
    width: 70%;
    border-radius: 5px;
    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(4) {
      width: 50%;
    }
    &.resize {
      width: 28%;
    }
    p {
      font-family: 'Satoshi';
      font-weight: 700;
      font-size: 13px;
      color: #0f4c59;
      margin-top: 3px;
    }
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
  }
}
</style>
