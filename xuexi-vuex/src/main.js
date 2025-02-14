import Vue from 'vue'
import App from './App.vue'
// 导入 vuex 组件挂载
import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
