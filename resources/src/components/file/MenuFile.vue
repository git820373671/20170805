<template>

  <div class="menu-header">
    <div class="left-icon" onclick="window.history.go(-1)">
      <Icon type="ios-arrow-left"></Icon>
    </div>
    <h1>部门发文</h1>
    <div class="search-icon" @click="doShow()">
      <Icon type="ios-search-strong"></Icon>
    </div>
    <div class="right-icon">
      <div class="drop-btn" @click="showList()">
        <Icon type="navicon"></Icon>
      </div>
      <ul v-bind:class="{show:isShow}" id="dropList">
        <li v-for="item in menuData" v-bind:name="item.name" :key="item.name" @click="getMenu(item.name)"
            v-bind:id="item.name"
            class="">
          {{item.text}}
        </li>
      </ul>
    </div>
    <div class="search-box" v-bind:class="{ show:isSearch }">
      <div class="left">
        <Input v-model="searchVal">
        <span slot="prepend">  <Icon type="ios-search-strong"></Icon></span>
        </Input></div>
      <p class="right" @click="doHide()">取消</p>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'MenuFile',
    data: function () {
      return {
        menuData: [],
        searchVal: '',
        isShow: false,
        isSearch: false
      }
    },
    created: function () {
      var url = '/static/data/fileMenu.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.menu)
        this.menuData = data.menu
      })
    },
    methods: {
      doShow: function () {
        this.isSearch = true
      },
      doHide: function () {
        this.isSearch = false
      },
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
        console.log($el, id)
        if ($el.length > 0) {
          for (var i = 0; i < $el.length; i++) {
            $el[i].setAttribute('class', '')
          }
        }
        $elC.setAttribute('class', 'selected')
        this.isShow = false
      }
    }
  }
</script>
