//  state 模块数据，   actions 异步函数，    mutations 同步函数，   getters计算输出结果函数


const cart = {
  //  开启命名空间,在组件中映射可以直接访问
  namespaced: true,

  state() {
    return {
      items: [
        {id: 0, name: '张三', age: 18,}
      ]
    }

  },

  // 处理同步函数
  mutations: {
    Meadow(state, str) {
      state.items.push({
        id: state.items.length + 1,
        name: str.name,
        age: str.age
      })


    },

    removeItem(state, id) {
      state.items = state.items.filter(item => item.id !== id);
    }


  },

  actions: {},

  getters: {},


}

export default cart;
