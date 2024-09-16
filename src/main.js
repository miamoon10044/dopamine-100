import { createApp } from 'vue';

import './style.css';

import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();
const app = createApp(App);

app.use(router); // Register the router
app.mount('#app');
