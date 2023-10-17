<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    SelectLabel,
    SelectPortal,
    SelectRoot,
    SelectScrollDownButton,
    SelectScrollUpButton,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
    SelectViewport,
} from 'radix-vue'

const currency = ref('USD');

function handleClick() {
    alert('hello!')
}

const options = ['USD', 'Naira', 'Cedes', 'Yan', 'Pounds']
</script>

<template>
    <SelectRoot v-model="currency">
        <SelectTrigger class="currency__btn" aria-label="Customise options">
            <SelectValue placeholder="" />
            <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
        </SelectTrigger>

        <SelectPortal>
            <SelectContent class="select-content" :side-offset="5" position="popper">
                <SelectScrollUpButton class="scroll-up-button">
                    <Icon icon="radix-icons:chevron-up" />
                </SelectScrollUpButton>

                <SelectViewport class="select-viewport">
                    <SelectGroup class="select-group">
                        <SelectItem v-for="(option, index) in options" :key="index" class="select-item" :value="option">
                            <SelectItemIndicator class="select-item-indicator">
                                <Icon icon="radix-icons:check" />
                            </SelectItemIndicator>
                            <SelectItemText>
                                {{ option }}
                            </SelectItemText>
                        </SelectItem>
                    </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton class="select-scroll-down-button">
                    <Icon icon="radix-icons:chevron-down" />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPortal>
    </SelectRoot>
</template>

<style scoped lang="scss">
.currency__btn {
    width: 80px;
    height: 34px;
    background-color: #F3F6FA;
    border-radius: 5px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 14px;

    span {
        color: #0593A5;
    }
}

.select-group {
    width: 80px;
    margin-top: 5px;
    // background-color: #F3F6FA;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

    .select-item {
        margin-bottom: 5px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        padding: 5px;
        color: #0593A5;
        border-radius: 5px;
        font-weight: 500;
        outline: none;
        cursor: pointer;

        &:hover, &:active, &[data-state="checked"] {
            border: 1px solid #02B8CF;
            border-radius: 5px;
            outline: none;
        }
    }
}
</style>