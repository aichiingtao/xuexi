<template>
  <div>
    <div>
      <button @click="mutation(-1)">-</button>
      {{ count }}
      <button @click="mutation(1)">+</button>
      <button @click="resetCount">重置</button>
    </div>
    <div>
      {{ Timer }}
      <button @click="addTimer">开启</button>
      <button>停止</button>
      <button>重置</button>
    </div>

    <div>
      姓名：<input type="text" v-model="name">
      年龄：<input type="text" v-model="age">
      <button @click="addCurrent"> 提交</button>
      <div v-for="(item,index) in items" :key="item.id">
        id： {{ index + 1 }}
        姓名：{{ item.name }}
        性别：{{ item.age }}
        <button @click="remove(item.id)">
          删除
        </button>

      </div>

    </div>

  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'

export default {
  data() {
    return {
      name: '',
      age: ''
    }

  },

  computed: {
    // 父模块映射
    ...mapState(['count', 'Timer']),
    // 子模块映射
    ...mapState('cart', ['items']),

  },


  methods: {

    ...mapMutations('cart', ['Meadow']),

    ...mapMutations('cart',['removeItem']),



    mutation(n) {
      // commit同步传递数据，键跟值
      this.$store.commit('Rainbow', n)
    },

    resetCount() {
      // 同步重置：commit
      // this.$store.commit('RSunshine', 0)

      // 异步重置：dispatch
      this.$store.dispatch('RSunshine', 0)
    },


    addTimer() {
      this.$store.dispatch('Zebra', 1)
    },


    addCurrent() {
      if (this.name === '' || this.age === '') {
        alert('请输入')
        return
      }
      const str = {
        name: this.name,
        age: this.age
      }
      this.Meadow(str)

      this.name = ''
      this.age = ''

    },

    remove(id){
      this.removeItem(id)
    }


  }
}


</script>


<style>

</style>
