<template>
  <div>
    <menu-tel></menu-tel>
    <div class="tel-list">
      <ul class="tab">
        <li class="active">
          <router-link :to="'/telList/all.html'">所有人员</router-link>
        </li>
        <li>
          <router-link :to="'/telList/structure.html'">结构</router-link>
        </li>
      </ul>
      <div class="all-list">
        <div class="all-list-group">
          <h5>A</h5>
          <p>A.小王</p>
          <p>A.小白</p>
          <p>A.小白</p>
        </div>
        <div class="all-list-group">
          <h5>B</h5>
          <p>B.小王</p>
          <p>B.小白</p>
        </div>
        <div class="all-list-group">
          <h5>C</h5>
          <p>C.小王</p>
          <p>C.小白</p>
          <p>C.小白</p>
        </div>
      </div>
      <div class="word">
        <p>A</p>
        <p>B</p>
        <p>C</p>
        <p>D</p>
        <p>E</p>
        <p>F</p>
        <p>G</p>
        <p>H</p>
        <p>I</p>
        <p>J</p>
        <p>K</p>
        <p>L</p>
        <p>M</p>
        <p>N</p>
        <p>O</p>
        <p>P</p>
        <p>Q</p>
        <p>R</p>
        <p>S</p>
        <p>T</p>
        <p>U</p>
        <p>V</p>
        <p>W</p>
        <p>X</p>
        <p>Y</p>
        <p>Z</p>
        <p>#</p>
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
