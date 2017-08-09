<template>
  <div class="h100" id="webW">
    <menu-study></menu-study>
    <div class="carousel-box">
      <Carousel v-model="carousel" arrow="always" dots="outside" :height="styleH">
        <Carousel-item>
          <div class="carousel" data-tag="01">
            <h2>课程名称<p>PE岗位职责</p></h2>
            <h3>课时<p>3.5小时</p></h3>
            <h3>截止时间<p>2017/06/23</p></h3>
            <h3>考试<p>书面考试</p></h3>
            <div class="carousel-foot">
              <p class="btn">查看</p>
            </div>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel carousel-bg" data-tag="02">
            <h2>课程名称<p>PE岗位职责</p></h2>
            <h3>课时<p>3.5小时</p></h3>
            <h3>截止时间<p>2017/06/23</p></h3>
            <h3>考试<p>书面考试</p></h3>
            <div class="carousel-foot">
              <!-- 假设结束时间为 2017/8/9 21:35:50 -->
              <div class="showTime">剩余学习时间：<span>{{this.$count_down('1502285750')}}</span></div>
            </div>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel" data-tag="03">
            <h2>课程名称<p>PE岗位职责</p></h2>
            <h3>课时<p>3.5小时</p></h3>
            <h3>截止时间<p>2017/06/23</p></h3>
            <h3>考试<p>书面考试</p></h3>
            <div class="carousel-foot">
              <p class="btn">完成</p>
            </div>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel  carousel-bg" data-tag="04">
            <h2>课程名称<p>PE岗位职责</p></h2>
            <h3>课时<p>3.5小时</p></h3>
            <h3>截止时间<p>2017/06/23</p></h3>
            <h3>考试<p>书面考试</p></h3>
            <div class="carousel-foot">
              <p class="btn">已完成</p>
            </div>
          </div>
        </Carousel-item>
        <Carousel-item>
          <div class="carousel  carousel-bg" data-tag="05">
            <h2>课程名称<p>PE岗位职责</p></h2>
            <h3>课时<p>3.5小时</p></h3>
            <h3>截止时间<p>2017/06/23</p></h3>
            <h3>考试<p>书面考试</p></h3>
            <div class="carousel-foot">
              <p class="btn">已截止</p>
            </div>
          </div>
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
        studyData: [],
        styleH: 0
      }
    },
    components: {
      MenuStudy: MenuStudy
    },
    created: function () {
      var getW = document.body.clientWidth
      this.styleH = getW * 1.15
      var url = '/static/data/study.json'
      var prams = {}
      this.$ajax_get(url, prams, function (data) {
        if (!data.success) return
        this.studyData = data.study
      })
      /* 秒格式时间戳 */
    }
  }
</script>
