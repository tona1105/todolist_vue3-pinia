import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia())
app.mount('#app')
