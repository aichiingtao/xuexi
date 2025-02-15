const state = {
  userinfo:{
    name:'zs'
  },
  age:18,

}
const mutations = {
  setUser(state,payload){
    // state.age = payload
    state.userinfo = payload
  }
}

const actions = {
  //  模块的异步函数，
  //  context表示的是上下文，因为调用的数据是在同一个模块里面，   Peace接受传过来的值：ame: '李四'
  Ocean(context,Peace){
    setTimeout(() => {
      context.commit('setUser',Peace)
    },1000)
  }
}

const getters = {

  // 换算大写函数
  UpperCaseName(state){
    return state.userinfo.name.toUpperCase()
  }
}

export default {
  // 开启命名空间
  namespaced:true,
  state,
  mutations,
  actions,
  getters,


}
