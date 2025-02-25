<template>
  <div>
    <van-nav-bar
      title="会员登录"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="addreturn"
      @click-right=""
    />

    <div>
      <div class="container">
        <form>
          <div class="form-group">
            <label for="username">手机号</label>
            <input type="text" id="username" name="username" required v-model="Phone">
          </div>

          <div class="form-group">
            <label for="password">图形验证码</label>
            <input type="text" id="password" name="password" required v-model="piCond">
          </div>

          <div class="form-group">
            <label for="confirmPassword">手机验证码</label>
            <input type="text" id="confirmPassword" name="confirmPassword" required v-model="Verification">
            <button class="yzm" @click="getCode">
              {{ second === totalSecond ? '发送验证码': second + '秒后获取'}}
            </button>
          </div>

          <button type="submit" @click="addlogin">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// 引入轻提示组件使用，方法一需要导入组件在执行中引用
// import { Toast } from 'vant'
import {Toast} from "vant";

export default {
  name: 'loginIndex',
  data(){
    return{
      totalSecond:5,   //  总秒数
      second:5,        //  倒计时秒数
      Phone:'' ,        //  手机号
      timer: null,       // 定时器id
      piCond:'',       // 图像验证码
    }

  },

  methods: {

    //  校验手机号，验证码
    check(){
      if(!/^1[3-9]\d{9}$/.test(this.Phone)){
        this.$toast('请输入正确手机号')
        return false
      }

      if(!/^\w{4}$/.test(this.piCond)){
        this.$toast('请输入正确验证码')
        return false
      }
      return true
    },

    //  获取验证码
    getCode(){
      // 调用校验函数
      if (!this.check()) return

      if(this.second === this.totalSecond){

        this.timer =  setInterval(() => {
          console.log(111)
          this.second--

          if(this.second < 0){
            clearImmediate(this.timer)
            this.timer = null
            this.second = this.totalSecond
          }
        },1000)

      }

    },

    //  点击登录
    addlogin() {
      if (!this.check()) return

      this.$router.push('/')
    },



    //  点击返回
    addreturn(){
      // 返回首页
      this.$router.push('/')
    }


  },


  // 关闭页面：destroyed
  destroyed() {
    // 关闭页面后关闭定时器
    clearImmediate(this.timer)
  }


}

</script>


<style>
.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.yzm {
  width: 100px;
  height: 30px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.form-group input:focus {
  border-color: #42b983;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369c6b;
}

</style>
