<template>
  <div>
    <div>
      <button @click="mutation(-1)">-</button>
      {{count}}
      <button @click="mutation(1)">+</button>
      <button @click="resetCount">重置</button>
    </div>
    <div>
      {{ Timer }}
      <button @click="addTimer">开启</button>
      <button>停止</button>
      <button>重置</button>
    </div>

<<<<<<< HEAD
=======
    <div>
      姓名：<input type="text" v-model="name">
      年龄：<input type="text" v-model="age">
      <button @click="Current"> 提交 </button>
      <div v-for="(item,index) in items" :key="item.id">
        id： {{ index + 1 }}
        命名：{{ item.name }}
        性别：{{ item.age }}

      </div>

    </div>

>>>>>>> e6f5a24 (Initial commit)
  </div>
</template>

<script>

<<<<<<< HEAD
import {mapState} from 'vuex'

export default {

  computed:{
    ...mapState(['count','Timer']),
=======
import {mapState,mapMutations} from 'vuex'

export default {
  data(){
    return{
      name:'',
      age:''
    }

  },

  computed:{
    // 父模块映射
    ...mapState(['count','Timer']),
    // 子模块映射
    ...mapState('cart', ['items']),
>>>>>>> e6f5a24 (Initial commit)


  },
  methods:{
<<<<<<< HEAD
=======

    ...mapMutations('cart', ['Meadow']),

>>>>>>> e6f5a24 (Initial commit)
    mutation(n){
      // commit同步传递数据，键跟值
      this.$store.commit('Rainbow',n)
    },
    resetCount(){
<<<<<<< HEAD
      this.$store.commit('RSunshine',0)
=======
      this.$store.dispatch('RSunshine',0)
>>>>>>> e6f5a24 (Initial commit)
    },

    addTimer(){
      this.$store.dispatch('Zebra',1)
<<<<<<< HEAD
    }
=======
    },

    Current(){
      if (this.name === '' || this.age === ''){
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
>>>>>>> e6f5a24 (Initial commit)
  },

}


</script>

<style>

</style>
