<template>
    <div class="auth__wrapper">
        <div class="auth--card">
            <div class="logo-container">
                <img src="../assets/svgs/abode-colored.svg" alt="Abode colored logo">
            </div>
            <h2>Forgot Password?</h2>
            <p class="fw-400 atl">Kindly enter the email associated with your account</p>
            <form class="form" @submit="onSubmit">
                <div class="input-group">
                    <label for="email">Your email</label>
                    <div class="input-container" :class="errors.email ? 'error' : ''">
                        <input autocomplete="email" type="email" placeholder="Ex. you@example.com" id="email"
                            v-bind="email">
                    </div>
                    <small v-if="errors.email">{{ errors.email }}</small>
                </div>

                <button class="btn atgd fw-700">Send OTP</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';

const router = useRouter();

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
    }),
});
const email = defineInputBinds('email');


// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit(values => {
    router.push({name: 'verify-otp'});
    console.log(JSON.stringify(values, null, 2));
});


</script>