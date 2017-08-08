<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>消息列表</h1>
    </div>
    <ul class="news-box">
      <li v-for="item in newsData" :key="item.id">
        <router-link :to="{name:'Content', params: {id:'item.id'}}">
          <h3>{{item.title}}</h3>
          <p>{{item.info}}</p>
          <div class="news-icon">
            <Icon type="ios-arrow-right"></Icon>
          </div>
        </router-link>
      </li>
    </ul>

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
