<template>

  <div class="menu-header">
    <h1>通讯录</h1>
    <div class="search-icon" @click="doShow()" style="right: 10px;">
      <Icon type="ios-search-strong"></Icon>
    </div>
    <div class="search-box" v-bind:class="{ show:isShow }">
      <div class="left">
        <Input v-model="searchVal">
        <span slot="prepend">  <Icon type="ios-search-strong"></Icon></span>
        </Input>
      </div>
      <p class="right" @click="doHide()">取消</p>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'MenuTel',
    data: function () {
      return {
        searchVal: '',
        isShow: false
      }
    },
    methods: {
      doShow: function () {
        this.isShow = true
      },
      doHide: function () {
        this.isShow = false
      }
    }
  }
</script>
