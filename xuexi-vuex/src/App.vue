<template>
  <div>
    <HelloWorld></HelloWorld>
    <!--    <p> {{ $store.state.title }}    这是底层渲染数据写法</p>-->
    <p>{{ title }}</p>    <!--  简写渲染数据     -->


    <!--    输入框跟 vuex的值绑定，实时更新,
     data是组件内部数据，输入框跟数据用v-model,   -->
    <input :value="title" @input="Banana">
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleDog(666)">一秒后变666</button>
    <button @click="Flower(888)">一秒后变888</button>

    <hr>
    <p>----------modules---------</p>
    <div>
      <p>{{ Lemon }}</p>

      <!-- modules 原生代码获取数据 -->
      <p>{{ $store.state.user.userinfo.name }}</p>
      <p> {{ $store.state.user.age }} </p>
      <button @click="Mountain">修改名字</button>


      <!--  modules简便学法     -->
      <p>{{ userinfo.name }}</p>
      <p> {{ UpperCaseName }}</p>
      <button @click="setUser({name: 'lisi'})">修改信息</button>

    </div>


  </div>

</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

// 同步处理，mapState 是把位于 index.state数据提取出来，可以简写渲染数据
//  异步处理，mapActions 是把位于 actions 里面的函数数据映射到数组中
// 计算处理，mapActions 是把计算输出的函数结果提取出来
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'


export default {
  HelloWorld,
  components: {HelloWorld},
  created() {
    console.log(this.$store.state.title)
  },

  //   computed 是映射属性
  computed: {
    // 辅助获取 vuex里面共享的数据
    ...mapState(['title', 'user']),
    //  指定子模块下面的某一个数据
    ...mapState('user', ['userinfo']),

    // 获取计算结果，辅助计算，可以直接在页面上渲染
    ...mapGetters(['Lemon']),

    // 获取 函数输出的结果，辅助计算，可以直接渲染在页面上
    ...mapGetters('user', ['UpperCaseName']),

    // 提取 user里面的 setUser 函数直接调用，简便写法
    ...mapMutations('user', ['setUser'])

  },


  methods: {

    // methods 映射方法
    //  获取映射出来的函数数据
    ...mapActions(['Flower']),


    handleAdd(n) {
      // 修改数据,不带参数
      // this.$store.commit('addCount')

      // 同步传送数据：commit，发动的 键 ，值
      this.$store.commit('addCount', n)

    },

    Banana(e) {
      //  e.target是获取这个标签本身，value：获取输入框的值
      const num = +e.target.value
      this.$store.commit('Elephant', num)

    },

    handleDog() {
      // 异步传送数据：dispatch  发动的 键 ，值
      this.$store.dispatch('Flower', 666)
    },

    Mountain() {
      //  原生态模块修改数据，    模块名/函数名，值
      // this.$store.commit('user/setUser',20)
      this.$store.commit('user/setUser', {
        name: '李四'
      })


    }

  }
}

</script>

<style>

</style>
