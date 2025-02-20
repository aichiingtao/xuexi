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

  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {

  computed:{
    ...mapState(['count','Timer']),


  },
  methods:{
    mutation(n){
      // commit同步传递数据，键跟值
      this.$store.commit('Rainbow',n)
    },
    resetCount(){
      this.$store.commit('RSunshine',0)
    },

    addTimer(){
      this.$store.dispatch('Zebra',1)
    }
  },

}


</script>

<style>

</style>
