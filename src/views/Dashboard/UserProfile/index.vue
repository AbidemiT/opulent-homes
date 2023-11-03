<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="user-profile__wrapper">
        <div class="profile__progress w-full bg-abode-white container py-6 px-10 flex items-center">
            <img class="rounded-full h-24 w-24 object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="User">

            <div class="name-email ml-8">
                <h4 class="font-bold text-abode-dark">Oke Samuel</h4>
                <p>okesamuel@gmail.com</p>
            </div>
            <div class="profile-progress__container bg-white py-5 px-8 ml-20 rounded-lg">
                <p class="mt-0 mb-3">Your Profile is 40% Complete</p>
                <app-progress />
            </div>
        </div>
        <div class="userprofile__tabs__wrapper bg-white rounded-2xl py-9 px-12 mt-2">
            <TabsRoot default-value="PI">
                <TabsList class="tabs-list">
                    <TabsTrigger class="tabs-trigger" value="PI">Personal Information</TabsTrigger>
                    <TabsTrigger class="tabs-trigger" value="NOK">Next of Kin</TabsTrigger>
                    <TabsTrigger class="tabs-trigger" value="V">Verification</TabsTrigger>
                </TabsList>
                <TabsContent class="tabs-content" value="PI">
                    <form action="" class="form" @submit="onSubmit">
                        <div class="input-group">
                            <label for="firstName">First name</label>
                            <div class="input-container" :class="errors.firstName ? 'error' : ''">
                                <input autocomplete="name" type="text" placeholder="Ex. Bobby" id="firstName"
                                    v-bind="firstName">
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
                            <label for="country">Country</label>
                            <div class="input-container">
                                <input type="text" name="country" id="country" autocomplete="country">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="gender">Gender</label>
                            <div class="input-container">
                                <input type="text" name="gender" id="gender" autocomplete="gender">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="employment">Employment status</label>
                            <div class="input-container">
                                <input type="text" name="employment" id="employment">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="occupation">Occupation</label>
                            <div class="input-container">
                                <input type="text" name="occupation" id="occupation">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="dob">Date of Birth</label>
                            <div class="input-container">
                                <input type="date" name="dob" id="dob">
                            </div>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="address">House Address</label>
                            <div class="input-container">
                                <input type="text" name="address" id="address">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="marital">Marital Status</label>
                            <div class="input-container">
                                <input type="text" name="marital" id="marital">
                            </div>
                        </div>


                        <button v-if="!loading" class="fw-700 py-5 px-10 flex items-center text-white">Save & Continue <span
                                class="-icon arrow"><i class="right-arrow-icon"></i></span></button>
                        <button v-else class="bg-blue atgd fw-700"><app-spinner /></button>
                    </form>
                </TabsContent>
                <TabsContent class="tabs-content" value="NOK">
                    <form action="" class="form" @submit="onSubmit">
                        <div class="input-group">
                            <label for="firstName">First name</label>
                            <div class="input-container" :class="errors.firstName ? 'error' : ''">
                                <input autocomplete="name" type="text" placeholder="Ex. Bobby" id="firstName"
                                    v-bind="firstName">
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
                            <label for="relationship">Relationship</label>
                            <div class="input-container" :class="errors.username ? 'error' : ''">
                                <input type="text" placeholder="Ex. Sister" id="relationship" v-bind="username">
                            </div>
                            <small v-if="errors.username">{{ errors.username }}</small>
                        </div>
                        <div class="input-group">
                            <label for="email">Email address</label>
                            <div class="input-container" :class="errors.email ? 'error' : ''">
                                <input autocomplete="email" type="email" placeholder="Ex. bobby@gmail.com" id="email"
                                    v-bind="email">
                            </div>
                            <small v-if="errors.email">{{ errors.email }}</small>
                        </div>
                        <div class="input-group col-span-2">
                            <label for="address">House Address</label>
                            <div class="input-container">
                                <input type="text" name="address" id="address" placeholder="Ex....">
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="phone">Phone number</label>
                            <div class="input-container" :class="errors.phone ? 'error' : ''">
                                <input type="text" autocomplete="tel" placeholder="080 0000 0000" id="phone" v-bind="phone">
                            </div>
                            <small v-if="errors.phone">{{ errors.phone }}</small>
                        </div>


                        <button v-if="!loading" class="fw-700 py-5 px-10 flex items-center text-white h-14">Save & Continue
                            <span class="-icon arrow"><i class="right-arrow-icon"></i></span></button>
                        <button v-else class="bg-blue atgd fw-700"><app-spinner /></button>
                    </form>
                </TabsContent>
                <TabsContent class="tabs-content" value="V">
                    <div class="verication__wrapper">
                        <!-- <verification/> -->
                        <h1>KYC Integration</h1>
                    </div>
                </TabsContent>
            </TabsRoot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import AppProgress from '@/components/AppProgress.vue';
import Verification from "./components/Verification.vue";

import { useForm } from 'vee-validate';
import * as yup from 'yup';

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
</script>

<style lang="scss" scoped>
.userprofile__tabs__wrapper {}

.form {
    max-width: 480px;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 221px);
    column-gap: 22px;
    row-gap: 22px;

    .input-group {
        width: 100%;
    }

    button {
        border-radius: 7px;
        background: linear-gradient(113deg, #63C7D3 14.71%, #0593A5 100.23%);

        span {
            display: block;
            margin-left: 5px;
        }
    }
}
</style>