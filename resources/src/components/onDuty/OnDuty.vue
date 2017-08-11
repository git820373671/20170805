<template>
  <div>
    <menu-duty></menu-duty>
    <ul class="duty-box">
      <li v-for="item in dutyData" v-bind:class="item.state">
        <h5>岗位：{{item.post}}</h5>
        <div class="duty-info">
          <p>值班人：{{item.name}}</p>
          <p>手机：{{item.phone}}</p>
          <p>座机：{{item.tel}}</p>
        </div>
        <div class="day-icon" v-if="item.state=='day'">白班</div>
        <div class="day-icon" v-if="item.state=='night'">晚班</div>
        <div class="day-icon" v-if="item.state=='H24'">24H</div>
        <div class="tel img-box" @click="doTel(item.phone,item.tel)"><img src="../../assets/images/tel.png"/></div>
      </li>
    </ul>
    <div class="do-tel" v-if="doState">
      <p class="do-tel-icon" @click="goTel(tel)"><img src="../../assets/images/tel2.png"/></p>
      <p class="do-tel-icon" @click="goPhone(phone)"><img src="../../assets/images/phone2.png"/></p>
    </div>

  </div>
</template>
<script>
  import MenuDuty from '@/components/onDuty/MenuDuty'

  export default {
    name: 'onDuty',
    data: function () {
      return {
        dutyData: [],
        doState: false,
        tel: '',
        phone: ''
      }
    },
    components: {
      MenuDuty: MenuDuty
    },
    created: function () {
      var url = '/static/data/duty.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.duty)
        this.dutyData = data.duty
      })
    },
    methods: {
      doTel: function (phone, tel) {
        console.log('tel', phone, tel)
        this.tel = tel
        this.phone = phone
        this.doState = true
      },
      goTel: function (tel) {
        alert('打座机' + tel)
        this.doState = false
      },
      goPhone: function (phone) {
        alert('打手机' + phone)
        this.doState = false
      }
    }
  }
</script>
