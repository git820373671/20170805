<template>
  <div>
    <div class="menu-header">
      <h1>我的</h1>
    </div>
    <div class="user-box">
      <router-link :to="'/user/password.html'"><p>修改密码</p></router-link>
      <router-link :to="'/user/version.html'"> <p>检查更新</p></router-link>
    </div>
    <div class="foot">
      <ul class="menu">
        <li class="menu1s">通讯录</li>
        <li class="menu2s">
          <router-link :to="'/'">首页</router-link>
        </li>
        <li class="menu3">
          <router-link :to="'/user.html'">我的</router-link>
        </li>
      </ul>
      <div class="img-box">
        <img src="../../assets/images/footBg.png"/></div>
    </div>
  </div>
</template>
<script>

  export default {
    data: function () {
      return {
        newsData: []
      }
    },
    created: function () {
      var url = '/static/data/news.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.news)
        this.newsData = data.news
      })
    },
    methods: {
      goInfo: function (id) {
        console.log('id', id)
      }
    }
  }
</script>
