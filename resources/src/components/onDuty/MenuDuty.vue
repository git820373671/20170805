<template>

  <div class="menu-header">
    <div class="left-icon" onclick="window.history.go(-1)">
      <Icon type="ios-arrow-left"></Icon>
    </div>
    <h1>今日值班</h1>
    <div class="right-icon">
      <div class="drop-btn" @click="showList()">
        <Icon type="navicon"></Icon>
      </div>
      <ul v-bind:class="{show:isShow}" id="dropList">
        <li class="selected" @click="getMenu('002')" id="002">全部</li>
        <li @click="getMenu('123')" id="123">公司01</li>
        <li @click="getMenu('456')" id="456">机务01</li>
        <li @click="getMenu('789')" id="789"> 航班值班</li>
        <li @click="getMenu('166')" id="166">MCC值班</li>
        <li @click="getMenu('106')" id="106">PE值班</li>
        <li @click="getMenu('177')" id="177">质量值班</li>
        <li @click="getMenu('199')" id="199"> 航材值班</li>
        <li @click="getMenu('129')" id="129"> 工程值班</li>
        <li @click="getMenu('153')" id="153"> 车队司机</li>
      </ul>

    </div>
  </div>

</template>
<script>
  export default {
    name: 'Menu',
    data: function () {
      return {
        isShow: false
      }
    },
    methods: {
      showList: function () {
        if (this.isShow) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
      getMenu: function (id) {
        var $el = document.getElementById('dropList').getElementsByClassName('selected')
        var $elC = document.getElementById(id)
        for (var i = 0; i < $el.length; i++) {
          $el[i].setAttribute('class', '')
        }
        $elC.setAttribute('class', 'selected')
        this.isShow = false
      }
    }
  }
</script>
