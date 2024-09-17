import { createApp } from 'vue';

import './style.css';

import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
import Countdown from '@chenfengyuan/vue-countdown';

// register Swiper custom elements
register();
const app = createApp(App);
app.component(Countdown.name, Countdown);
app.use(router); // Register the router
app.mount('#app');
