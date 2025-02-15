<template>
<div class="app-container">
  <cart-header></cart-header>
  <caet-item></caet-item>
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
  }
}
</script>




<style>
.app-container{
  margin: 0 auto;
  width: 800px;
}

</style>
