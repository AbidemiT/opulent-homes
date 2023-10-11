<template>
    <div class="dashboard__sidebar">
        <div class="logo-container">
            <img src="../../assets/svgs/abode-dashboard-logo.svg" alt="Abode Logo">
        </div>
        <ul class="menu">
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'dashboard'}"> <span class="-icon"><i class="dashboard"></i></span>Dashboard</router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'assets'}"><span class="-icon"><i class="assets"></i></span>Assets</router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'mortgage'}"><span class="-icon"><i class="mortgage"></i></span>Mortgage</router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'savings'}"><span class="-icon"><i class="savings"></i></span>Savings</router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'marketplace'}"><span class="-icon"><i class="marketplace"></i></span>Marketplace</router-link>
            </li>
            <li class="menu__list">
                <router-link class="menu__link" :to="{name: 'profile'}"><span class="-icon"><i class="profile"></i></span>Profile</router-link>
            </li>
        </ul>
        <app-divider/>
    </div>
</template>

<script setup lang="ts">
import AppDivider from '@/components/AppDivider.vue';
</script>