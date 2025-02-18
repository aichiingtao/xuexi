import Vue from 'vue'
import App from './App.vue'

//  接收在 index.vue 文件里面导出来的 router
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
