<template>
  <div class="asset__card">
    <div class="img__container">
      <img src="../../assets/imgs/house.png" :alt="`${title}`" />
      <app-tag content="Own To Earn" :bg-color="'primary'" />
      <app-heart :active="saved" />
      <div class="banner text-white">
        <h4>{{ title }}</h4>
        <div class="location__size flex gap-5">
          <p>{{ location }}</p>
          <p>{{ size }}</p>
        </div>
      </div>
    </div>
    <div class="fin-details" v-if="type">
      <div>
        <p>Total Cost: N600k</p>
        <span>30%</span>
      </div>
      <div class="progress">
        <ProgressRoot
          v-model="progressValue"
          class="relative overflow-hidden bg-blackA9 rounded-full w-full sm:w-[300px] h-4 sm:h-2"
          style="transform: translateZ(0)"
        >
          <ProgressIndicator
            class="bg-mint rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
            :style="`transform: translateX(-${100 - progressValue}%)`"
          />
        </ProgressRoot>
      </div>
      <div>
        <p>Amount Paid: N200k</p>
        <span>Balance: N400k</span>
      </div>
      <div>
        <p>Next Payment Date:</p>
        <span>12/11/2024</span>
      </div>
      <button class="app-btn orang-btn btn-block">May Payment</button>
    </div>
    <div class="ac-content text-teal-dark mb-4" v-else>
      <div class="asset-type__asset-return flex items-center justify-between mb-2">
        <p>{{ assetType }}</p>
        <p class="text-teal">Return: ${{ assetReturn }}%</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="unit-cost__duration">
          <p class="mt-0 mb-2">
            Duration:
            <span class="text-teal">{{ duration }} weeks</span>
          </p>
          <h5 class="font-bold">
            Unit Cost:
            <span class="text-teal">{{ unitCost }}</span>
          </h5>
        </div>
        <router-link
          :to="{ name: 'asset-details', params: { id: `${title?.replace(' ', '-')}` } }"
          class="bg-orange py-3 px-5 text-white rounded-md"
        >
          See More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppTag from '../AppTag.vue'
import AppHeart from '../AppHeart.vue'
import { ProgressIndicator, ProgressRoot } from 'radix-vue'

const progressValue = ref(10)

onMounted(() => {
  const timer = setTimeout(() => (progressValue.value = 66), 500)
  return () => clearTimeout(timer)
})

defineProps({
  title: String,
  duration: String,
  location: String,
  unitCost: String,
  assetReturn: String,
  saved: Boolean,
  assetType: String,
  size: String,
  type: String
})
</script>

<style lang="scss" scoped>
.asset__card {
  background-color: #f5feff;
  width: 100%;
  padding: 9px;
  border: 0.3px solid #63c7d3;
  border-radius: 10px;

  .img__container {
    position: relative;

    width: 100%;
    height: 210px;
    margin-bottom: 9px;

    img {
      border-radius: 9px;
      object-fit: cover;
    }

    .app-tag__wrapper {
      position: absolute;
      left: 10px;
      top: 10px;
    }

    .app-heart__wrapper {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .banner {
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(6, 147, 165, 0.9) 23.27%, rgba(6, 147, 165, 0.56) 100%);
    padding: 9px 14px;

    h4 {
      font-weight: 700;
      line-height: normal;
      font-size: 16px;
    }

    .location__size {
      p {
        line-height: normal;
        margin: 0;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }

  .ac-content {
    color: #0f4c59;

    .asset-type__asset-return {
      // display:;
    }

    h4 {
      font-size: 1em;
      font-weight: 700;
    }

    h5 {
      font-weight: 700;
      font-size: 0.875em;
    }

    .duration__yield {
      display: flex;
      align-items: center;
      column-gap: 8px;
      margin-bottom: 4px;

      p {
        font-size: 0.875em;
        color: #13804c;

        &:first-of-type {
          color: #0f4c59;
        }
      }
    }
  }
}

.fin-details {
  padding: 10px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    &:first-child {
      > * {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #02b8cf;
      }
      > span {
        text-align: right;
      }
    }
    > * {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: #0f4c59;
    }
    p {
      width: 50%;
    }
    > span {
      text-align: right;
      width: 50%;
    }
  }
  button {
    margin: 20px 0 0;
  }
  .progress {
    margin: 10px 0;
  }
}

@media (max-width: 869px) {
  .asset__card .img__container .banner {
    .location__size {
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
