<template>
  <div class="bg-f h100">
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>检查更新</h1>
    </div>
    <div class="version-box">
      <div class="img-box"><img src="../../assets/images/logo.png"/></div>
      <p>航维云</p>
      <p>V1.12</p>
      <div class="btn" style="display: none">暂无版本</div>
      <div class="btn text-success">更新</div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'onDuty',
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
