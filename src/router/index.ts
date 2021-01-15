import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/First.vue'
import Second from  '../views/Second.vue'
import EmpiricalCalculation from "@/components/EmpiricalCalculation.vue";
import Test from "@/components/Test.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
        {
          path: '',
          component: EmpiricalCalculation
        },
    ]
  },
  {
    path: '/Second',
    name: 'Second',
    component: Second,
    children: [
        {
          path: '/',
          component: Test
    }
    ]
  },
  {
    path: '/Third',
    component: () => import(/* webpackChunkName: "about" */ '../views/Third.vue')
  },
  {
    path: '/Fourth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fourth.vue')
  },
  {
    path: '/Second/Test',
    component: Test
  }
]

const router = new VueRouter({
  routes
})

export default router
