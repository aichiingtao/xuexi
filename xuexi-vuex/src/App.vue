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


  </div>

</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
// 导入 vuex 辅助计算属性后，可以简写渲染数据
import {mapState} from 'vuex'


export default {
  HelloWorld,
  components: {HelloWorld},
  created() {
    console.log(this.$store.state.title)
  },

  computed: {
    // 辅助获取 vuex里面共享的数据
    ...mapState(['title'])
  },


  methods: {
    handleAdd(n) {
      // 修改数据,不带参数
      // this.$store.commit('addCount')

      // 同步传送数据：commit，
      this.$store.commit('addCount', n)

    },

    Banana(e){
      //  e.target是获取这个标签本身，value：获取输入框的值
      const num = +e.target.value
      this.$store.commit('Elephant',num)

    },

    handleDog(){
      // 异步传送数据：dispatch
      this.$store.dispatch('Flower',666)
    }

  }
}

</script>

<style>

</style>
