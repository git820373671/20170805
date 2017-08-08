<template>

  <div class="menu-header">
    <div class="left-icon" onclick="window.history.go(-1)">
      <Icon type="ios-arrow-left"></Icon>
    </div>
    <h1>掌上学习</h1>
    <div class="right-icon">
      <Dropdown trigger="click" @on-click='getMenu()' placement="bottom-end">
        <Icon type="navicon"></Icon>
        <Dropdown-menu slot="list">
          <Dropdown-item name='1'>开始学习</Dropdown-item>
          <Dropdown-item name='2'> 学习中</Dropdown-item>
          <Dropdown-item name="3"> 完成</Dropdown-item>
          <Dropdown-item name="4"> 已完成</Dropdown-item>
          <Dropdown-item name="5"> 已截止</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'MenuStudy',
    data: function () {
      return {}
    },
    methods: {
      getMenu: function (name) {
        console.log(name)
      }
    }
  }
</script>
