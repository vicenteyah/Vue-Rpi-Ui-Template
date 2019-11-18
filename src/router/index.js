import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import data from '../components/data.vue'
import  about from '../components/about.vue'

Vue.use(Router)
const routes =[
  {
    path:'/home',
    name:'home',
    component: home
  },
  {
    path:'/data',
    name: 'data',
    component: data
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]
export const router = new Router({
  mode:'hash',
  routes,
  scrollBehavior(){
    return { x: 0, y: 0 }
  }
})
