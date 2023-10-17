<template>
    <div class="auth__wrapper">
        <div class="auth--card">
            <div class="logo-container">
                <img src="../assets/svgs/abode-colored.svg" alt="Abode colored logo">
            </div>
            <h2>Welcome back!</h2>
            <p class="fw-400 atl">Login to your dashboard</p>
            <form class="form" @submit="onSubmit">
                <div class="input-group">
                    <label for="email">Your email</label>
                    <div class="input-container" :class="errors.email ? 'error' : ''">
                        <input autocomplete="email" type="email" placeholder="Ex. you@example.com" id="email"
                            v-bind="email">
                    </div>
                    <small v-if="errors.email">{{ errors.email }}</small>
                </div>
                <div class="input-group">
                    <label for="password">Your password</label>
                    <div class="input-container" :class="errors.password ? 'error' : ''">
                        <input autocomplete="current-password" :type="passwordVisibility ? 'text' : 'password'"
                            placeholder="Type here" id="password" v-bind="password">
                        <svg @click="setPasswordVisibility" xmlns="http://www.w3.org/2000/svg" width="25" height="18"
                            viewBox="0 0 25 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.5 17.5C19.0188 17.5 22.7624 12.6435 24.2478 10.1667C24.7756 9.28655 24.7756 8.21345 24.2478 7.3333C22.7624 4.85651 19.0188 0 12.5 0C5.98122 0 2.23759 4.85651 0.752239 7.3333C0.224406 8.21345 0.224405 9.28655 0.752238 10.1667C2.23759 12.6435 5.98122 17.5 12.5 17.5Z"
                                :fill="passwordVisibility ? '#0593A5' : '#819599'" />
                            <circle cx="12.5" cy="8.75" r="3.75" :fill="passwordVisibility ? '#C8F9FF' : '#B1D5EA'" />
                        </svg>
                    </div>
                    <small v-if="errors.password">{{ errors.password }}</small>
                </div>

                <button v-if="!loading" class="btn atgd fw-700">Login Now <span class="-icon arrow"><i
                            class="right-arrow-icon"></i></span></button>
                <button v-else class="btn atgd fw-700"><app-spinner/></button>
            </form>
            <div class="ctas-container">
                <router-link :to="{ name: 'forgot-password' }" class="ao">Can't login?</router-link>
                <p class="atr"> Don’t have an account? <router-link :to="{ name: 'register' }">Signup</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import AppSpinner from "@/components/AppSpinner.vue";

import useAppToast from "@/composables/toast";

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    }),
});

const router = useRouter();

const loading = ref(false);
const passwordVisibility = ref(false);
const email = defineInputBinds('email');
const password = defineInputBinds('password');

function setPasswordVisibility() {
    passwordVisibility.value = !passwordVisibility.value
}

// Creates a submission handler
// It validate all fields and doesn't call your function unless all fields are valid
const onSubmit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
    loading.value = true;

    setTimeout(() => { 
        loading.value = false;
        router.push({ name: 'dashboard' });
        useAppToast().success("Successfully Logged In", {
            position: 'top-right'
        })
    }, 3000);
});


</script>