import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Privacidade from '../views/Privacidade.vue';


const routes = [
  { path: '/', name: 'home', component: Home }, // Nome da rota para facilitar a navegação programática
  { path: '/privacidade', component: Privacidade },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
