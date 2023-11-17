<template>
  <div class="dashboard__sidebar" :class="{'showSideMenu': isOpen}">
    <div class="logo-container">
      <img class="dashboard-web" src="../../assets/svgs/abode-dashboard-logo.svg" alt="Abode Logo" />
      <img class="dashboard-mobile" @click="toggleMenu" src="../../assets/svgs/dashboard-mobile-logo.svg" alt="Abode dashboard mobile logo">
    </div>
    <ul class="menu">
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'dashboard' }">
          <span class="-icon"><i class="dashboard"></i></span>
          <span>Dashboard</span>
        </router-link>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'assets' }">
          <span class="-icon"><i class="assets"></i></span>
          <span>Assets</span>
        </router-link>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'wallet' }">
          <span class="-icon"><i class="wallet"></i></span>
          <span>Wallet</span>
        </router-link>
      </li>
      <!-- <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'mortgage' }">
          <span class="-icon"><i class="mortgage"></i></span>
          <span>Mortgage</span>
        </router-link>
      </li> -->
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'savings' }">
          <span class="-icon"><i class="savings"></i></span>
          <span>Savings</span>
        </router-link>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'marketplace' }">
          <span class="-icon"><i class="marketplace"></i></span>
          <span>Marketplace</span>
        </router-link>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'profile' }">
          <span class="-icon"><i class="profile"></i></span>
          <span>Profile</span>
        </router-link>
      </li>
    </ul>
    <app-divider />
    <ul class="menu">
      <li class="menu__list">
        <router-link class="menu__link" :to="{ name: 'referral' }">
          <span class="-icon"><i class="referral"></i></span>
          <span>Referral</span>
        </router-link>
      </li>
      <li class="menu__list">
        <a class="menu__link" @click.prevent="logout">
          <span class="-icon"><i class="logout"></i></span>
          <span>LogOut</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppDivider from '@/components/AppDivider.vue'
import { ref } from 'vue';

const router = useRouter()
const isOpen = ref(false)

const logout = () => {
  router.push({ name: 'login' })
}

const toggleMenu = () => {
   isOpen.value = !isOpen.value

   console.log(isOpen.value)
}

</script>

<style lang="scss" scoped>
.menu__link {
  cursor: pointer;
}
</style>
