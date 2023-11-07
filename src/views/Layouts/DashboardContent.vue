<template>
  <main class="dashboard__content">
    <div class="top__header">
      <nav class="nav">
        <div class="left">
          <div class="active_route">
            <h4>{{ currentRoute }}</h4>
          </div>
          <div class="last-login">
            <span>Last login -</span>
            <span class="bold">16 June, 2023</span>
          </div>
        </div>
        <div class="right">
          <app-currencies />
          <div class="notification_view">
            <span class="-icon"><i class="notification-active"></i></span>
          </div>
          <div class="user_avatar right">
            <AvatarRoot class="avatar__root">
              <AvatarImage
                class="avatar__img"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <AvatarFallback class="avatar__fallback" :delay-ms="600">CT</AvatarFallback>
            </AvatarRoot>
            <span class="-icon sm"><i class="down-arrow"></i></span>
          </div>
        </div>
      </nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue'
import AppCurrencies from '@/components/AppCurrencies.vue'
import { ref } from 'vue'

const router = useRouter()
const currentRoute = ref<string>('Dashboard')

// Use the router's navigation guard to track route changes
router.beforeEach((to, from, next) => {
  // Todo: Influence this dynamically

  if (to.name === 'dashboard') {
    currentRoute.value = 'Dashboard'
  } else if (to.name === 'assets') {
    currentRoute.value = 'My Assets'
  } else if (to.name === 'asset-details') {
    currentRoute.value = 'Asset Details'
  } else if (to.name === 'mortgage') {
    currentRoute.value = 'Mortgage'
  } else if (to.name === 'savings') {
    currentRoute.value = 'Savings'
  } else if (to.name === 'marketplace') {
    currentRoute.value = 'Marketplace'
  } else {
    currentRoute.value = 'Profile'
  }

  next()
})
</script>
