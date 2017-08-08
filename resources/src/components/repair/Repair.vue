<template>
  <div>
    <div class="menu-header">
      <div class="left-icon" onclick="window.history.go(-1)">
        <Icon type="ios-arrow-left"></Icon>
      </div>
      <h1>维修资质</h1>
    </div>
    <ul class="repair-box">
      <li>姓名：<span>{{repairData.name}}</span></li>
      <li>工号：<span>{{repairData.card}}</span></li>
      <li>岗位：<span>{{repairData.post}}</span></li>
      <li>所在部门：<span>{{repairData.department}}</span></li>
      <li>授权信息：
        <div class="img-box">
          <img v-bind:src="repairData.info1"/></div>
      </li>
      <li>授权岗位／项目职责说明：
        <div class="img-box">
          <img v-bind:src="repairData.info2"/></div>
      </li>
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
    }
  }
</script>
