//  state 放数据，   actions 异步函数，    mutations 同步函数，   getters计算输出结果函数

// 导入请求接口   axios
import axios, {patch} from 'axios'

export default ({
  //  开启命名空间
  namespaced:true,

  state() {
    return {
      list:[]
    }
  },
  getters:{
    quantity(state){
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    Total(state){
      return state.list.reduce((sum,item) => sum + item.count * item.price, 0)
    }
  },
  mutations: {
    // 接收到下文函数传过来的值，更新到自己的 list里面去
    updateList(state,newList){
      state.list = newList
    },
    Peace(state,obj){
      const goods =  state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },

  actions: {
    async getList (context) {
      //  请求接口获取数据
        const res = await axios.get("http://localhost:3000/cart")
      //   调用 updateList函数，把值传过去
      context.commit('updateList',res.data)
      console.log(res.data)
    },

    // 传递过来的值有两个，使用obj数组来接受
    async postList (context,obj) {
      //  请求接修改数据                                                                   修改的数据的 ID，
      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`,{
        // 修改的参，修改的值
        count: obj.newCount})

      //  调用 Peace 函数，把值传过去
      context.commit('Peace',{
        newCount: obj.newCount,
        id : obj.id
      })
    }


  },
  modules: {}
})



















