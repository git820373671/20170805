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
      <Dropdown trigger="click" @on-click='getMenu()' placement="bottom-end">
        <Icon type="navicon"></Icon>
        <Dropdown-menu slot="list">
          <Dropdown-item v-for="item in menuData" v-bind:name="item.name" :key="item.name">{{item.text}}</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
    <div class="search-box" v-bind:class="{ show:isShow }">
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
        isShow: false
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
      getMenu: function (e) {
      },
      doShow: function () {
        this.isShow = true
      },
      doHide: function () {
        this.isShow = false
      }
    }
  }
</script>
