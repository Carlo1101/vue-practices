import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AnimeList from '../views/AnimeList.vue'
import ContactMe from '../views/ContactMe.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/all-anime',
    name: 'AnimeList',
    component: AnimeList
  },
  {
    path: '/contact-us',
    name: 'ContactMe',
    component: ContactMe
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
