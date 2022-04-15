import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import Second from "@/views/Second";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/second',
    name: 'second',
    component:Second
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
