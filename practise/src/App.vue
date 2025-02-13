<template>
  <div id="app">
    <keep-alive :include="['/frontPage.vue']">     <!--   缓存页面，不再次发送请求      -->
      <router-view></router-view>
    </keep-alive>

  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
