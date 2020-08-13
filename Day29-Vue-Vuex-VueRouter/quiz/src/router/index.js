import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import QuizPage from '../views/QuizPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/quiz',
    name: 'QuizPage',
    component: QuizPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
