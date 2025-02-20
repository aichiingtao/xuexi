<template>
  <div>
    <van-nav-bar
      title="会员登录"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div>
      <div class="container">
        <form>
          <div class="form-group">
            <label for="username">手机号</label>
            <input type="text" id="username" name="username" required>
          </div>

          <div class="form-group">
            <label for="password">图形验证码</label>
            <input type="password" id="password" name="password" required>
          </div>

          <div class="form-group">
            <label for="confirmPassword">手机验证码</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>
          </div>

          <button type="submit">注册</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'loginIndex',
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
