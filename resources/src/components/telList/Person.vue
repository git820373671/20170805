<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>办公室</h1>
    </div>
    <div class="tel-list">
      <div class="all-list person">
        <div class="all-list-group">
          <p>小王</p>
          <p>小白</p>
          <p>小白</p>
        </div>
      </div>
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
