<template>
    <div class="otp__wrapper" ref="otpWrappper">
        <input type="text" name="" id="" class="digit" :class="{bounce: digits[i] !== null}" v-for="(digit, i) in digits" :key="`${digit}-${i}`"
            v-model="digits[i]" maxlength="1" :autofocus="i === 0" @keydown="handleKeyDown($event, i)" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, type Ref } from "vue";

const emit = defineEmits(['update:otp']);
const props = defineProps({
    default: String,
    digitCount: {
        type: Number,
        required: true,
    }
})

const digits: any[] = reactive([]);

if (props.default && props.default.length === props.digitCount) {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = props.default.charAt(i)
    }
} else {
    for (let i = 0; i < props.digitCount; i++) {
        digits[i] = null;
    }
}

const otpWrappper: Ref<null> = ref(null);

const handleKeyDown = function (event: any, index: number) {
    if (event.key !== "Tab" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        event.preventDefault();
    }

    if (event.key === "Backspace") {
        digits[index] = null;

        if (index != 0) {
            (otpWrappper.value.children)[index - 1].focus();
        }

        return;
    }

    if ((new RegExp('^([0-9])$')).test(event.key)) {
        digits[index] = event.key;

        if (index != props.digitCount - 1) {
            (otpWrappper.value.children)[index + 1].focus();
        }
    }

    if (isDigitsFull()) {
        emit('update:otp', digits.join(''))
    }
}



const isDigitsFull = function () {
    for (const elem of digits) {
        if (elem == null || elem == undefined) {
            return false;
        }
    }

    return true;
}


</script>

<style scoped lang="scss">
.otp__wrapper {
    display: flex;
    column-gap: 20px;
    justify-content: space-between;

    .digit {
        display: flex;
        width: 36px;
        height: 36px;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        border-radius: 4px;
        border: 1px solid#B5B6B5;
        background: #FFF;

        &:focus {
            outline: 2px solid #02B8CF;
        }

        &:not([value='']) {
            outline: 2px solid #02B8CF;
        }
    }
}

.bounce {
  animation: pulse .3s ease-in-out alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.1);
  }
}
</style>