<template>

  <div class="foot">
    <ul class="menu">
      <li class="menu1">
        <router-link :to="'/telList/all.html'">通讯录</router-link>
      </li>
      <li class="menu2s">
        <router-link :to="'/'">首页</router-link>
      </li>
      <li class="menu3s">
        <router-link :to="'/user.html'">我的</router-link>
      </li>
    </ul>
    <div class="img-box">
      <img src="../../assets/images/footBg.png"/></div>
  </div>

</template>
<script>
  export default {
    name: 'FootTel',
    data: function () {
      return {}
    }
  }
</script>
