//  state 放数据，   actions 异步函数，    mutations 同步函数，   getters计算输出结果函数

// 导入请求接口   axios
import axios from 'axios'

export default ({
  namespaced: true,
  state() {
    return {
      list:[]
    }
  },
  getters: {},
  mutations: {
    // 接收到下文函数传过来的值，更新到自己的 list里面去
    updateList(state,newList){
      state.list = newList
    }
  },

  actions: {
    async getList (context) {
        const res = await axios.get("http://localhost:3000/cart")
      console.log(res)
      //   调用 updateList函数，把值传过去
      context.commit('updateList',res)
    }

  },
  modules: {}
})
