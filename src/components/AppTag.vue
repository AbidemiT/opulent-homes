<template>
    <div class="app-tag__wrapper" :class="bgColor">
        {{ content }}
    </div>
</template>
<script lang="ts" setup>
defineProps({
    content: String,
    bgColor: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.app-tag__wrapper {
    max-width: 100px;
    border-radius: 100px;
    padding: 2px 8px;
    text-align: center;
    height: 22px;

    font-size: 0.6875em;
    color: #2A5F7E;

    &.primary {
        background: #EDFCFF;
    }

    &.success {
        background: #B7FFE1;
    }

    &.danger {
        background: linear-gradient(113deg, #FF8F63 14.71%, #F26B35 100.23%);
        color: #fff;
    }
}
</style>