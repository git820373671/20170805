<template>
  <div>
    <menu-tel></menu-tel>
    <div class="tel-list">
      <ul class="tab">
        <li>
          <router-link :to="'/telList/all.html'">所有人员</router-link>
        </li>
        <li class="active">
          <router-link :to="'/telList/structure.html'">结构</router-link>
        </li>
      </ul>
      <div class="all-list">
        <div class="all-list-group structure">
          <p>
            <router-link :to="'/telList/Person.html'"><i>人</i>人事部</router-link>
          </p>
          <p>
            <router-link :to="'/telList/Person.html'"><i>办</i>办公室</router-link>
          </p>
          <p>
            <router-link :to="'/telList/Person.html'"><i>商</i>商务部</router-link>
          </p>
        </div>
      </div>
    </div>

    <foot-tel></foot-tel>
  </div>
</template>
<script>
  import MenuTel from '@/components/telList/MenuTel'
  import FootTel from '@/components/telList/FootTel'
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
    components: {
      MenuTel: MenuTel,
      FootTel: FootTel
    },
    methods: {
      goInfo: function (id) {
        console.log('id', id)
      }
    }
  }
</script>
