

<template>
  <div>
    <div class="box">
      <img src="#" alt="">
      <h5>111</h5>
      <p>111</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {

  data(){
    return{
      articles:[]
    }
  },

  // router 请求接口渲染页面数据
  async created() {
    const res = await axios.get('https://www.dedao.cn/pc/ddlive/v2/pc/home/live')
    this.articles = res
    console.log(res,'123')
  }
}
</script>



<style scoped>
.box{
  margin: 20px 0;
}


</style>