<template>
    <div class="dashboard__layout__wrapper">
        <dashboard-sidebar />
        <dashboard-content />
    </div>
</template>

<script setup lang="ts">
import DashboardSidebar from './DashboardSidebar.vue';
import DashboardContent from './DashboardContent.vue';
</script>