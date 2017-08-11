<template>

  <div class="menu-header">
    <div class="left-icon" onclick="window.history.go(-1)">
      <Icon type="ios-arrow-left"></Icon>
    </div>
    <h1>掌上学习</h1>

    <div class="right-icon">
      <div class="drop-btn" @click="showList()">
        <Icon type="navicon"></Icon>
      </div>
      <ul v-bind:class="{show:isShow}" id="dropList">
        <li class="selected" @click="getMenu('002')" id="002">开始学习</li>
        <li @click="getMenu('123')" id="123">学习中</li>
        <li @click="getMenu('456')" id="456">完成</li>
        <li @click="getMenu('789')" id="789"> 已完成</li>
        <li @click="getMenu('166')" id="166">已截止</li>
      </ul>

    </div>

  </div>

</template>
<script>
  export default {
    name: 'MenuStudy',
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
