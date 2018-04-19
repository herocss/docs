import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Documentation from '@/components/Documentation'
import Start from '@/components/Start'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/start',
    name: 'Start',
    component: Start
  }
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})
