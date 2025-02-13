import Vue from 'vue'
import VueRouter from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue"
import frontPage from "@/views/frontPage.vue"
import member from "@/views/member.vue"
import information from "@/views/information.vue"
import mine from "@/views/mine.vue"
import DetailsPage from "@/views/DetailsPage.vue"

Vue.use(VueRouter)   //  router 插件初始化

const router = new VueRouter({
    routes: [

        // 配置普通路由，跳转的路径
        {
            path: '/',
            component: HelloWorld,
            redirect:'/HelloWorld',
            // 配置二级路由
            children:[
                {
                    path:'/frontPage',
                    component:frontPage,
                },                {
                    path:'/member',
                    component:member,
                },                {
                    path:'/information',
                    component:information,
                },                {
                    path:'/mine',
                    component:mine,
                },

            ]
        },

        {
            path: '/DetailsPage/:id',
            component: DetailsPage
        },

    ],

    // 自定义属性名
    linkActiveClass:'active'
})

// 导出 router
export default router

























