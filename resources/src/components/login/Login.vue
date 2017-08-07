<template>
  <div class="login">
    <div class="img-box logo"><img src="../../assets/images/logo.jpg"/></div>
    <div class="login-box">
      <Input v-model="account">
      <span slot="prepend">账号:</span>
      </Input>
    </div>
    <div class="login-box">
      <Input v-model="password" type="password">
      <span slot="prepend">密码:</span>
      </Input>
    </div>
    <div class="login-btn">
      <Button type="primary" long v-on:click="submit">登 陆</Button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data: function () {
      return {
        account: '',
        password: ''
      }
    },
    methods: {
      submit: function () {
        if (!!this.account && !!this.password) {
          var url = '/static/data/login.json'
          var prams = {
            account: this.account,
            password: this.password
          }
          this.$ajax_get(url, prams, function (data) {
            console.log('传参数', prams)
            if (!data.success) return
            this.$router.push({
              path: '/'
            })
          })
        } else {
          alert('请输入用户名或密码')
        }
      }
    }
  }
</script>
