<template>
  <div>
    <div class="box" v-for="(item,index) in articles" :key="item.id"
         @click="$router.push(`/DetailsPage/${item.id}`)">
      <img :src="item.home_img" alt="">
      <h3>{{ item.author }}</h3>
      <p>{{ item.intro }}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {

  data() {
    return {
      articles: []
    }
  },

  // router 请求接口渲染页面数据
  async created() {
    const res = await axios.post('https://www.dedao.cn/pc/ddlive/v2/pc/home/live')
    this.articles = res.data.c.list
  }
}
</script>


<style scoped>
.box {
  img {
    width: 100px;
    height: 50px;
  }

  margin: 20px 0;

}


</style>