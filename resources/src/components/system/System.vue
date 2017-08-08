<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>制度表格</h1>
    </div>
    <ul class="system-box">
      <li @click="goShare(item.id)" v-for="item in systemData" :key="item.id"><p>{{item.title}}</p>
        <div class="news-icon">
          <Icon type="android-share-alt" size="22"></Icon>
          <Icon type="ios-arrow-right" size="28" class="m-l-20"></Icon>
        </div>
      </li>
    </ul>
    <div class="doShare" v-if="doState">
      <div class="share-box">
        <div class="img-box"><img src="../../assets/images/share0.jpg"/></div>
        <div class="img-box" @click="doWx()"><img src="../../assets/images/share1.jpg"/></div>
        <div class="img-box" @click="doEm()"><img src="../../assets/images/share2.jpg"/></div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'onDuty',
    data: function () {
      return {
        systemData: [],
        doState: false
      }
    },
    created: function () {
      var url = '/static/data/system.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.system)
        this.systemData = data.system
      })
    },
    methods: {
      goShare: function (id) {
        console.log('id', id)
        this.doState = true
      },
      doWx: function () {
        console.log('>>>>>>>>>>.')
        alert('分享到微信')
        this.doState = false
      },
      doEm: function () {
        alert('分享到邮箱')
        this.doState = false
      }
    }
  }
</script>
