import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Cadastro from '../Cadastro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
