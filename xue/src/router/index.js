import Vue from 'vue'
import VueRouter from "vue-router"
import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import Friend from "@/views/Friend.vue";
import NotFound from "@/views/NotFound.vue";
import {NotFoundError} from "core-js/internals/dom-exception-constants";


Vue.use(VueRouter)   //插件初始化

//创建一个新的空的路由对象
const router = new VueRouter({
    routers:[
        // 打开网页，强制跳转的路径页面
        {path:'/',redirect:'/Friend'},
        //  配置普通路由传参
        {path: '/Find', component: Find},
        //   配置动态路由传参
        {path: '/My/:words', component: My},
        {path: '/Friend', component: Friend},
        //   404页面，当访问了一个不存在的路由时，就会显示NotFound这个路由
        {path: '*', component: NotFound},

    ],
    // 自定义高亮类名

    linkActiveClass:'active',    // 模糊匹配
    linkExactActiveClass:'exact-active'   // 精确匹配
})

export default router