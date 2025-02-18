import Vue from 'vue'
import VueRouter from 'vue-router'
import pay from '../views/pay'
import LogIn from '../views/LogIn'
import layout from '../views/layout'
import search from '../views/search'
import searchList from '../views/search/list.vue'
import Details from '../views/Details'

Vue.use(VueRouter)

//  配置路由路径
const routes = [
  {
    path: '/', component: layout
  },
  {
    path: '/pay', component: pay
  },
  {
    path: '/LogIn', component: LogIn
  },
  {
    path: '/search', component: search
  },
  {
    path: '/Details', component: Details
  },
  {
    path: '/searchList', component: searchList
  },

]

const router = new VueRouter({
  routes
})

export default router
