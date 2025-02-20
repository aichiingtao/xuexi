<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
=======
//  state 放数据，   actions 异步函数，    mutations 同步函数，   getters计算输出结果函数，   modules 导入模块的引用


import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  // 导入模块
  modules: {
    cart,
  },

>>>>>>> e6f5a24 (Initial commit)
  state: {
    count:0,
    Timer:0,
  },
  getters: {
  },


  //  同步数据处理，
  mutations: {
    Rainbow(state,n){
      state.count += n
    },
<<<<<<< HEAD
    RSunshine(state,Dog){
=======
    Harvest(state,Dog){
>>>>>>> e6f5a24 (Initial commit)
      state.count = Dog
    },

    Umbrella(state,Bliss){
      state.Timer += Bliss
    }

<<<<<<< HEAD


  },

  //  异步数据处理，
  actions: {

    Zebra(context,Cat){
      setTimeout(() => {
        context.commit('Umbrella',Cat)
=======
  },



  //  异步数据处理，
  actions: {

    RSunshine(context,str){
      setTimeout(() => {
        context.commit('Harvest',str)
      },2000)

    },

    Zebra(context,Cat){
      let i = Cat
      setTimeout(() => {
        i++
        context.commit('Umbrella', i)
>>>>>>> e6f5a24 (Initial commit)

      },1000)
    },
  },
<<<<<<< HEAD
  modules: {
  }
=======



>>>>>>> e6f5a24 (Initial commit)
})
