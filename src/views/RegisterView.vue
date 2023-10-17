<template>
    <div class="auth__wrapper">
        <div class="auth--card">
            <div class="logo-container">
                <img src="../assets/svgs/abode-colored.svg" alt="Abode colored logo">
            </div>
            <h2>Create your account</h2>
            <p class="fw-400 atl">Create your Abode account</p>
            <form action="" class="form register" @submit="onSubmit">
                <div class="input-group">
                    <label for="firstName">First name</label>
                    <div class="input-container" :class="errors.firstName ? 'error' : ''">
                        <input autocomplete="name" type="text" placeholder="Ex. Bobby" id="firstName" v-bind="firstName">
                    </div>
                    <small v-if="errors.firstName">{{ errors.firstName }}</small>
                </div>
                <div class="input-group">
                    <label for="lastName">Last name</label>
                    <div class="input-container" :class="errors.lastName ? 'error' : ''">
                        <input autocomplete="family-name" type="text" placeholder="Ex. Daheze" id="lastName"
                            v-bind="lastName">
                    </div>
                    <small v-if="errors.lastName">{{ errors.lastName }}</small>
                </div>
                <div class="input-group">
                    <label for="username">Username</label>
                    <div class="input-container" :class="errors.username ? 'error' : ''">
                        <input autocomplete="username" type="text" placeholder="Ex. bobby_daheze" id="username"
                            v-bind="username">
                    </div>
                    <small v-if="errors.username">{{ errors.username }}</small>
                </div>
                <div class="input-group">
                    <label for="phone">Phone number</label>
                    <div class="input-container" :class="errors.phone ? 'error' : ''">
                        <input type="text" autocomplete="tel" placeholder="080 0000 0000" id="phone" v-bind="phone">
                    </div>
                    <small v-if="errors.phone">{{ errors.phone }}</small>
                </div>
                <div class="input-group">
                    <label for="email">Email address</label>
                    <div class="input-container" :class="errors.email ? 'error' : ''">
                        <input autocomplete="email" type="email" placeholder="Ex. bobby@gmail.com" id="email"
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

                <button v-if="!loading" class="btn atgd fw-700">Sign Up <span class="-icon arrow"><i
                            class="right-arrow-icon"></i></span></button>
                <button v-else class="btn atgd fw-700"><app-spinner /></button>
            </form>
            <div class="ctas-container">
                <p class="ao"> Already have an account? <router-link :to="{ name: 'login' }">Login</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

import AppSpinner from "@/components/AppSpinner.vue";
import useAppToast from "@/composables/toast";

const router = useRouter();
const loading = ref(false);

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        phone: yup.string().required(),
        password: yup.string().min(6).required(),
    }),
});

const email = defineInputBinds('email');
const firstName = defineInputBinds('firstName');
const lastName = defineInputBinds('lastName');
const username = defineInputBinds('username');
const phone = defineInputBinds('phone');
const password = defineInputBinds('password');

const passwordVisibility = ref(false);

function setPasswordVisibility() {
    passwordVisibility.value = !passwordVisibility.value
}

const onSubmit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
    loading.value = true;
    
    setTimeout(() => {
        loading.value = false;
        router.push({ name: 'dashboard' });
        useAppToast().success("Successfully Registered", {
            position: 'top-right'
        })
    }, 3000);
});

</script>