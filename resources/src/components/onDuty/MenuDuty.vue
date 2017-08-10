<template>

  <div class="menu-header">
    <div class="left-icon" onclick="window.history.go(-1)">
      <Icon type="ios-arrow-left"></Icon>
    </div>
    <h1>今日值班</h1>
    <div class="right-icon">
      <Dropdown trigger="click"  @on-click="getMenu()"placement="bottom-end">
        <Icon type="navicon"></Icon>
        <Dropdown-menu slot="list">
          <Dropdown-item name='1' selected>全部</Dropdown-item>
          <Dropdown-item name='2'> 公司01</Dropdown-item>
          <Dropdown-item name="3"> 机务01</Dropdown-item>
          <Dropdown-item name="4"> 航班值班</Dropdown-item>
          <Dropdown-item name="5"> MCC值班</Dropdown-item>
          <Dropdown-item name="6"> PE值班</Dropdown-item>
          <Dropdown-item name="7"> 质量值班</Dropdown-item>
          <Dropdown-item name="8"> 航材值班</Dropdown-item>
          <Dropdown-item name="9"> 工程值班</Dropdown-item>
          <Dropdown-item name="10"> 车队司机</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Menu',
    data: function () {
      return {}
    },
    methods: {
      getMenu: function (e) {
        console.log(this, arguments, e)
      }
    }
  }
</script>
