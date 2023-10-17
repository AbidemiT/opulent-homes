<template>
    <div class="app-heart__wrapper">
        <span class="-icon"><i :class="active ? 'active-heart':'heart'"></i></span>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    active: Boolean,
})
</script>

<style lang="scss" scoped>
.app-heart__wrapper {
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EDFCFF;
    border-radius: 9px;

    .-icon {
        width: 14px;
        height: 14px;
    }
}
</style>