<template>
<div class="app-container">
  <cart-header></cart-header>
  <caet-item v-for="(item,index) in list" :key="item.id" :item="item"></caet-item>
  <cart-footer></cart-footer>

</div>

</template>

<script>
import CartHeader from "@/components/cart-header.vue";
import CartFooter from "@/components/cart-footer.vue";
import CaetItem from "@/views/caet-item.vue";
import {mapState} from 'vuex';

export default {

  components:{
    CartHeader,
    CaetItem,
    CartFooter,
  },
  computed:{
    ...mapState('cart',['list'])
  },

  created(){
    //  异步操作数据，获取发送过来的数据，哪个模块，哪个数据
    this.$store.dispatch('cart/getList')

  },

}
</script>




<style>
.app-container{
  margin: 0 auto;
  width: 800px;
}

</style>
