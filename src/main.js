import { createApp } from 'vue';

import './style.css';
import './assets/css/cards.scss';
import './assets/css/global.scss';
import 'swiper/css';

import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
import Countdown from '@chenfengyuan/vue-countdown';
import i18n from './i18n';

// register Swiper custom elements
register();
const app = createApp(App);
// Configure Vue to recognize 'swiper-' tags as custom elements
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('swiper-');

app.component(Countdown.name, Countdown);
app.use(i18n);
app.use(router); // Register the router
app.mount('#app');
