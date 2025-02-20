import Vue from 'vue'
import VueRouter from 'vue-router'
import pay from '../views/pay'
import LogIn from '../views/LogIn'
import layout from '../views/layout'
import search from '../views/search'
import searchList from '../views/search/list.vue'
import Details from '../views/Details'

// 二级路由配置
import home from '../views/layout/home.vue'
import category from '../views/layout/category.vue'
import cart from '../views/layout/cart.vue'
import user from '../views/layout/user.vue'

Vue.use(VueRouter)

//  配置路由路径
const routes = [
  {
    path: '/', component: layout,
    //  重定向路径
    redirect:'/home',
    //  二级路由配置
    children:[
      {
        path: '/home', component: home,
      },
      {
        path: '/category', component: category,
      },
      {
        path: '/cart', component: cart,
      },
      {
        path: '/user', component: user,
      },
    ]

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
