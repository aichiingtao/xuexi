<template>
  <div id="HelloWorld">
    <div>
      <!--    二级路由出口   -->
      <router-view></router-view>
    </div>
    <div>
      <router-link to="/frontPage">首页</router-link>
      <router-link to="/member">会员</router-link>
      <router-link to="/information">信息</router-link>
      <router-link to="/mine">我的</router-link>
    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>


<style scoped>
a {
  width: 100px;
  height: 50px;
  background-color: lightgray;
  margin: 0 20px;
}
.active{
  background-color: #42b983;
}


</style>
