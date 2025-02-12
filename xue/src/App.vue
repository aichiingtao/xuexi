<template>
  <div id="app">
    <div class="Banana">
      <div>
        <!--  普通路由传参     -->
        <router-link to="/Find?key=发现音乐">发现音乐</router-link>
      </div>
      <div>
        <!--  动态路由传参-->
        <router-link to="/My/我的音乐">我的音乐</router-link>
      </div>
      <div>
        <router-link to="/Friend?key=朋友音乐">朋友音乐</router-link>
      </div>
    </div>
    <Find></Find>
    <My></My>
    <Friend></Friend>


  </div>
</template>

<script>
import Find from './views/Find.vue'
import Friend from './views/Friend.vue'
import My from './views/My.vue'

export default {
  name: 'App',
  components: {
    Find,
    Friend,
    My
  },
  data() {
    return {
      Apple: true
    }
  }
}
</script>

<style>
#app {
  .Banana {
    display: flex;

    div {
      width: 200px;
      height: 50px;
      background-color: lightgray;
      text-align: center;
      line-height: 50px;
      margin: 0 20px;

    }

    .active {

      background-color: #42b983;

    }
  }


}
</style>
