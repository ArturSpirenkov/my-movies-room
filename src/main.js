import 'normalize.css';
import './assets/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Page from './layouts/Page.vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.component('Page', Page);

app.use(createPinia());
app.use(router);

app.mount('#app');
