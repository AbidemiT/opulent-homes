import './assets/scss/main.scss';
import VueApexCharts from "vue3-apexcharts";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueApexCharts);

app.use(createPinia())
app.use(router)

app.mount('#app');


