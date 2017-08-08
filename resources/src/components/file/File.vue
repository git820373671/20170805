<template>
  <div>
    <menu-file></menu-file>
    <ul class="file-box">
      <li v-for="item in fileData" :key="item.id">
      <router-link :to="{name:'Content', params: {id:'item.id'}}">
        <p>文件名称：<span>{{item.name}}</span></p>
        <p>发布日期：<span>{{item.data}}</span></p>
        <div class="news-icon">
          <Icon type="ios-arrow-right"></Icon>
        </div>
      </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import MenuFile from '@/components/file/MenuFile'

  export default {
    name: 'onDuty',
    data: function () {
      return {
        fileData: []
      }
    },
    components: {
      MenuFile: MenuFile
    },
    created: function () {
      var url = '/static/data/file.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.file)
        this.fileData = data.file
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
