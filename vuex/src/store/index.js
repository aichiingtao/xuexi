import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)
//  state 放数据，   actions 异步函数，    mutations 同步函数，   getters计算输出结果函数，   modules 导入模块的引用

export default new Vuex.Store({

  // 导入模块
  modules: {
    cart,
  },

  // 模块数据
  state: {
    count: 0,
    Timer: 0
  },


  //  同步数据处理，
  mutations: {
    Rainbow(state, n) {
      state.count += n
    },

    Harvest(state, Dog) {

      state.count = Dog
    },

    Umbrella(state, Bliss) {
      state.Timer += Bliss
    },

  },

  //  异步数据处理，

  actions:{
     Zebra(context, Cat) {
       setTimeout(() => {
         context.commit('Umbrella', Cat)
       },1000)
    },

    RSunshine(context, Dog) {
       setTimeout(() => {
         context.commit('Harvest', Dog)
       },2000)
    },


  },


  // 计算输出结果函数
  getters: {},

})








