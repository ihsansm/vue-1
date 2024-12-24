import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import TableHome from '../components/TableHome.vue'
import DestinationHome from '../components/DestinationHome.vue'
import TodoHome from '../components/TodoHome.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/table', component: TableHome },
  { path: '/destination', component: DestinationHome },
  { path: '/todo', component: TodoHome }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router