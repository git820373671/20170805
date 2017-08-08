<template>
  <div class="h100">
    <menu-study></menu-study>
    <div class="carousel-box">
      <Carousel v-model="carousel" arrow="always" dots="outside">
        <Carousel-item>
          <div class="carousel">1</div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel">2</div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel">3</div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel">4</div>
        </Carousel-item>
      </Carousel>
    </div>
  </div>
</template>
<script>
  import MenuStudy from '@/components/study/MenuStudy'
  export default {
    name: 'study',
    data: function () {
      return {
        carousel: 0,
        studyData: []
      }
    },
    components: {
      MenuStudy: MenuStudy
    },
    created: function () {
      var url = '/static/data/study.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        console.log('data', data.study)
        this.studyData = data.study
      })
    }
  }
</script>
