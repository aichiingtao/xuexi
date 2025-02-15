// 这里存放的就是vuex的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user  from './modules/user'
import setting  from './modules/setting'

Vue.use(Vuex) // 初始化安装 Vuex 插件

// 创建一个空仓库
const store = new Vuex.Store({
  // 创建共享的数据，data是组件里面自己的数据，state是共享的
  state: {
    title: 100,
    list:[1,2,3,4,5,6,7,8,9,10]

  },

  // 接收传过来的数据修改，其他组件内部不能直接修改共享数据，不能延时处理数据，必须同步
  mutations: {
    // 接收的键学成一个函数，n是携带过来的参值
    addCount(state, n) {
      state.title += n

    },

    // 接收输入框的值，同步更新到
    Elephant(state, Elephant) {
      state.title = Elephant
    },


  },

  //  异步处理，可以延时处理数据
  actions: {
    Flower(context, num) {
      setTimeout(() => {
        //  Elephant：键           num：值是666
        context.commit('Elephant', num)
      }, 1000)
    }
  },


  // 类似计算属性
  getters:{
    Lemon(state){
      return  state.list.filter(item => item > 5)
    }
  },

  modules:{
    user,
    setting,
  }

})

// 导出给 main.is 接受使用（本来这个插件就是要在main里面使用的，后期数据太多不好管理，所以单独使用一个文件来管理）
export default store
