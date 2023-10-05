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
                        <input autocomplete="family-name" type="text" placeholder="Ex. Daheze" id="lastName" v-bind="lastName">
                    </div>
                    <small v-if="errors.lastName">{{ errors.lastName }}</small>
                </div>
                <div class="input-group">
                    <label for="username">Username</label>
                    <div class="input-container" :class="errors.username ? 'error' : ''">
                        <input autocomplete="username" type="text" placeholder="Ex. bobby_daheze" id="username" v-bind="username">
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
                        <input autocomplete="email" type="email" placeholder="Ex. bobby@gmail.com" id="email" v-bind="email">
                    </div>
                    <small v-if="errors.email">{{ errors.email }}</small>
                </div>

                <button class="btn atgd fw-700">Sign Up <span class="-icon arrow"><i class="right-arrow-icon"></i></span></button>
            </form>
            <div class="ctas-container">
                <p class="ao"> Already have an account? <router-link :to="{ name: 'login' }">Login</router-link></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        phone: yup.string().required(),
        // password: yup.string().min(6).required(),
    }),
});

const email = defineInputBinds('email');
const firstName = defineInputBinds('firstName');
const lastName = defineInputBinds('lastName');
const username = defineInputBinds('username');
const phone = defineInputBinds('phone');
// const password = defineInputBinds('password');

const passwordVisibility = ref(false);

function setPasswordVisibility() {
    passwordVisibility.value = !passwordVisibility.value
}

const onSubmit = handleSubmit(values => {
    console.log(JSON.stringify(values, null, 2));
});

</script>