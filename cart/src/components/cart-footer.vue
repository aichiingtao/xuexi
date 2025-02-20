<template>
  <div>
      共 <span>{{ quantity }}</span>商品，
      合计：￥<span>{{ Total }}</span>,
    <span class="jissuan">结算</span>
  </div>

</template>



<script>
import {mapGetters} from "vuex";

export default {

  computed:{
    ...mapGetters('modules',['quantity','Total'])
  }
}

</script>


<style scoped>

.jissuan{
  background-color: #42b983;
}


</style>
