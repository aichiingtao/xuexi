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

// 定义一个专门存放需要权限访问的页面

const authUrls = ['/pay', '/Details']

// 全局前置导航守卫

router.beforeEach((to, from, next) => {

  // 判断你访问的页面，是不是在限制访问页面中
  if (!authUrls.includes(to.path)){
    //  非限制页面，直接放行
    next()
    return
  }
  //  是权限页面，需要判断


})

const router = new VueRouter({
  routes
})

export default router
