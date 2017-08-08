<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" @click="goHome()">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>消息列表</h1>
    </div>
    <ul class="repair-box">
      <li>姓名：<span>{{repairData.name}}</span></li>
    </ul>

  </div>
</template>
<script>

  export default {
    name: 'onDuty',
    data: function () {
      return {
        repairData: {}
      }
    },
    created: function () {
      var url = '/static/data/repair.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.repair)
        this.repairData = data.repair
      })
    },
    methods: {
      goHome: function () {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
