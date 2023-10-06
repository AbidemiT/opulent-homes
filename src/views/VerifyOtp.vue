<template>
    <div class="auth__wrapper">
        <div class="auth--card">
            <div class="logo-container">
                <img src="../assets/svgs/abode-colored.svg" alt="Abode colored logo">
            </div>
            <h2>Forgot Password?</h2>
            <p class="fw-400 atl">Kindly enter the OTP sent to your email</p>
            <form class="form" @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="otp">Enter OTP Code</label>
                    <div class="input-container otp">
                        <app-otp :digit-count="6" @update:otp="otpValue = $event"/>
                        <!-- <small>{{ otpValue }}</small> -->
                    </div>
                </div>
                <small>{{ otpValue }}</small>

                <div class="ctas">
                    <a href="!#" class="resend">Resend</a>
                </div>

                <button class="btn atgd fw-700" :disabled="!otpValue">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppOtp from "@/components/AppOtp.vue"
import { ref } from 'vue';

const otpValue = ref('');

const handleSubmit = () => {
    console.log(otpValue);
};


</script>

<style>
.ctas {
    text-align: right;

    .resend {
        font-size: .88em;
        color:#515251;
    }
}
</style>