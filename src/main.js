import 'normalize.css';
import './assets/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Page from './layouts/Page.vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBlq4g4XUaPnFhvX6fzzyjdBq0nEVXgvn0',
  authDomain: 'mymoviesroom-8d120.firebaseapp.com',
  projectId: 'mymoviesroom-8d120',
  storageBucket: 'mymoviesroom-8d120.appspot.com',
  messagingSenderId: '935453423960',
  appId: '1:935453423960:web:9882e9e01f487de9628d2d',
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.component('Page', Page);

app.use(createPinia());
app.use(router);

app.mount('#app');
