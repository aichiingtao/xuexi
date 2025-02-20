<template>
  <div>
<!-- 配置二级路由出口   -->
    <router-view></router-view>

<!--    引用组件库   route开启路由模式   to是配置理由路径-->
    <van-tabbar active-color="#ee0a24" inactive-color="#000" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="calendar-o" to="/category">分类页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  name:'layoutIndex',
}

</script>


<style>


</style>
