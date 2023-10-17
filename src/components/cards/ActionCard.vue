<template>
    <div class="action__card">
        <div class="icon__container">
            <span class="-icon"><i :class="`action-${type}`"></i></span>
        </div>
        <div class="ac-content">
            <h5>{{ title }}</h5>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    type: String
})
</script>