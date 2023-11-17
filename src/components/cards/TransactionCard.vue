<template>
  <div class="transaction__card">
    <div class="left">
      <div v-if="type !== 'purchased'" class="icon__container">
        <span class="-icon"><i :class="`action-${type}`"></i></span>
      </div>
      <div v-else class="img__container">
        <img src="../../assets/imgs/house.png" alt="Asset purchased" />
      </div>
      <div class="ac-content">
        <h5>{{ title }}</h5>
        <p>{{ date }}</p>
      </div>
    </div>
    <div class="right">
      <h3>N{{ amount }}k</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  date: String,
  type: String,
  amount: Number
})
</script>

<style lang="scss" scoped>
.transaction__card {
  display: grid;
  grid-template-columns: 184px auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  .left {
    display: flex;
    align-items: center;
    column-gap: 17px;

    .icon__container,
    .img__container {
      width: 70px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon__container {
      border-radius: 4.882px;
      background: #ecfdff;
    }

    .ac-content {
      width: 97px;

      h5 {
        font-size: 0.875em;
      }

      p {
        font-size: 0.8125em;
        color: #7c859e;
      }
    }
  }

  .right {
    h3 {
      font-size: 0.875em;
      font-weight: 700;
    }
  }
}
</style>
