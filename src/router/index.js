import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Sync from "@/views/Sync";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sync/:target', name: 'Sync', component: Sync },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
