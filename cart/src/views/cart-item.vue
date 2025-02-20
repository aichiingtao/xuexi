<template>
  <div>
    <div class="item-box">
      <img :src="item.thumb" alt="">
      <div>
        <h4>{{ item.name }}</h4>
        <p>{{ item.price }}</p>

        <button @click="btnClick(-1)">-</button>
        {{ item.count }}
        <button @click="btnClick(1)">+</button>
      </div>

    </div>
  </div>

</template>




<script>
export default {
  //  接受父组件传过来的数据
  props:{
    item:{
      type:Object,
      required:true
    }
  },
  methods:{
    //  点击加减按钮
    btnClick(step){
      //  修改数量
      const newCount = this.item.count + step
      const id = this.item.id
      //  异步数据处理，  把要修改的值传给 cart接收
      this.$store.dispatch('modules/postList', {
        newCount,
        id
      })


    }
  }

}

</script>





<style scoped>

.item-box{
  display: flex;

}

</style>
