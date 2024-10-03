import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUpPage from '../views/SignUpPage.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUpPage,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404 page
    name: 'NotFound',
    component: NotFoundPage,
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
