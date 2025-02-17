<template>
<div class="app-container">
  <cart-header></cart-header>
  <caet-item v-for="(item,index) in Lemon" key="item.id"></caet-item>
  <cart-footer></cart-footer>

</div>

</template>

<script>
import CartHeader from "@/components/cart-header.vue";
import CartFooter from "@/components/cart-footer.vue";
import CaetItem from "@/views/caet-item.vue";

export default {

  components:{
    CartHeader,
    CaetItem,
    CartFooter,
  },
  computed:{
    //  异步数据处理
    Lemon(){
      //  异步操作数据，获取发动发来的数据，哪个模块，哪个数据
      this.$store.dispatch('cart/getList')
    }

  }

}
</script>




<style>
.app-container{
  margin: 0 auto;
  width: 800px;
}

</style>
