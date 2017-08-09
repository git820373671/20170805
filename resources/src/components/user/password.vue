<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>修改密码</h1>
      <div class="right-icon">
        <p class="savePas" v-bind:class="!!oldPasW && !!PasW?'text-success':''" v-on:click="checkPasW()">完成</p></div>
    </div>
    <div class="password-box">
      <p>请输入原密码</p>
      <Input v-model="oldPasW" type="password"></Input>
      <p>请输入新密码</p>
      <Input v-model="PasW" type="password"></Input>
    </div>


  </div>
</template>
<script>

  export default {
    data: function () {
      return {
        oldPasW: '',
        PasW: ''
      }
    },
    methods: {
      checkPasW: function () {
        if (!this.oldPasW && !this.PasW) return false
        /* 此处请求接口判端原密码是否正确，并且保存新密码 */
        var url = '/static/data/passS.json'
        var prams = {
          oldPasW: this.oldPasW,
          PasW: this.PasW
        }
        this.$ajax_get(url, prams, function (data) {
          if (data.success) {
            this.$router.push({
              path: '/user.html'
            })
          } else {
            alert('您的原始密码错误')
          }
        })
      }
    }
  }
</script>
