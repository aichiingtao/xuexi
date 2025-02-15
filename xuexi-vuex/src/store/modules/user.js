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

const actions = {}

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
