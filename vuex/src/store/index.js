import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    RSunshine(state,Dog){
      state.count = Dog
    },

    Umbrella(state,Bliss){
      state.Timer += Bliss
    }



  },

  //  异步数据处理，
  actions: {

    Zebra(context,Cat){
      setTimeout(() => {
        context.commit('Umbrella',Cat)

      },1000)
    },
  },
  modules: {
  }
})
