import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';

import Editar from '../views/Editar.vue';
import Nuevo from '../views/Nuevo.vue';
import Pensum from '../views/Pensum.vue';
import Gestor from '../views/HomeGestor.vue';
import EditarPensum from '../views/EditarPensum.vue';
import User from '../views/User.vue';
import Programa from '../views/Programa.vue';
import Reporte from '../views/Reporte.vue';
import Comision from '../views/Comision.vue';
 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  },
  {
    path: '/pensum',
    name: 'Pensum',
    component: Pensum
  },
  {
    path: '/HomeGestor',
    name: 'Gestor',
    component: Gestor
  },
  {
    path: '/EditarPensum',
    name: 'EditarPensum',
    component: EditarPensum
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/Programa',
    name: 'Programa',
    component: Programa
  },
  {
    path: '/Reporte',
    name: 'Reporte',
    component: Reporte
  },
  {
    path: '/Comison',
    name: 'Comision',
    component: Comision
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
