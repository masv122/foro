import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/categorias/:id',
    name: 'Categoria',
    component: () => import('../views/Categoria.vue')
  },
  {
    path: '/categorias/:idCategoria/temas/:idTema',
    name: 'Tema',
    component: () => import('../views/Tema.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/categoria/:id/crear-tema',
    name: 'Crear Tema',
    component: () => import('../views/CrearTema.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
