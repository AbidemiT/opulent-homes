<script setup lang="ts">
import { ToastClose, ToastDescription, ToastRoot, ToastTitle } from 'radix-vue'
import { ref } from 'vue'

const count = ref(0)

function publish() {
    count.value++
}

defineExpose({
    publish
})
</script>

<template>
    <ToastRoot v-for="index in count" :key="index">
        <ToastDescription>
            <slot />
        </ToastDescription>
        <ToastClose>Dismiss</ToastClose>
    </ToastRoot>
</template>