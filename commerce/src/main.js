import Vue from 'vue'
import App from './App.vue'
import router from './router'
//  导入初始化样式
import style from './style/common.less'

//  导入 vant 组件库的使用
import "@/utlis/vant-ui"

// 挂载理由路径
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  style,
  render: h => h(App)
}).$mount('#app')
