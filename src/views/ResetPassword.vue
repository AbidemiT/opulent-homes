<template>
    <div class="auth__wrapper">
        <div class="auth--card">
            <div class="logo-container">
                <img src="../assets/svgs/abode-colored.svg" alt="Abode colored logo">
            </div>
            <h2>Create Your Password</h2>
            <p class="fw-400 atl">Enter your new password below to secure and access your account</p>
            <form class="form" @submit="onSubmit">
                <div class="input-group">
                    <label for="password">Password</label>
                    <div class="input-container" :class="errors.password ? 'error' : ''">
                        <input autocomplete="off" type="password" placeholder="Type here" v-bind="password">
                    </div>
                    <small v-if="errors.password">{{ errors.password }}</small>
                </div>
                <div class="input-group">
                    <label for="password">Confirm Password</label>
                    <div class="input-container" :class="errors.confirmPassword ? 'error' : ''">
                        <input autocomplete="off" type="password" placeholder="Type here" id="confirmPassword"
                            v-bind="confirmPassword">
                    </div>
                    <small v-if="errors.confirmPassword">{{ errors.confirmPassword }}</small>
                </div>

                <button class="btn atgd fw-700">Reset Password</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref('password')], 'Passwords do not match'),
        password: yup.string().min(6).required(),
    }),
});

const password = defineInputBinds('password');
const confirmPassword = defineInputBinds('confirmPassword');

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
});


</script>