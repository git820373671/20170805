<template>
  <div class="index">
    <div class="header img-box"><img src="../../assets/images/indexBg.jpg"/>
      <div class="tips">
        <Badge count="10" overflow-count="99"></Badge>
      </div>
    </div>
    <div class="main">
      <div class="main-top">
        <Row :gutter="20">
          <Col span="8">
          <router-link :to="'/onDuty.html'">
            <div class="img-box">
              <img src="../../assets/images/icon1.jpg"/>
            </div>
            <p>今日值班</p>
          </router-link>
          </Col>
          <Col span="8">
          <router-link :to="'/repair.html'">
            <div class="img-box">
              <img src="../../assets/images/icon2.jpg"/>
            </div>
            <p>维修资质</p>
          </router-link>
          </Col>
          <Col span="8">
          <div class="img-box">
            <img src="../../assets/images/icon3.jpg"/>
          </div>
          <p>掌上学习</p></Col>
        </Row>
      </div>
      <div class="main-bottom">
        <Row :gutter="20">
          <Col span="12">
          <div class="img-box">
            <img src="../../assets/images/icon4.jpg"/>
          </div>
          <p>部门发文</p>
          </Col>
          <Col span="12">
          <div class="img-box">
            <img src="../../assets/images/icon5.jpg"/>
          </div>
          <p>制度表格</p></Col>
        </Row>
      </div>
    </div>
    <div class="foot">
      <div class="img-box">
        <img src="../../assets/images/footBg.png"/></div>
      <ul class="menu">
        <li class="menu1">通讯录</li>
        <li class="menu2s">首页</li>
        <li class="menu3s">我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data: function () {
      return {}
    }
  }
</script>
