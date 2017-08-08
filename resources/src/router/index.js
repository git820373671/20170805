import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Iview from 'iview'
import '../assets/script/layout.js'
import 'iview/dist/styles/iview.css'
import '../assets/css/newIview.css'
import Index from '../components/index/Index'
// /*login*/
import Login from '../components/login/Login'
// 今日值班
import OnDuty from '../components/onDuty/OnDuty'
// 维修资质
import Repair from '../components/repair/Repair'
// 消息列表
import News from '../components/news/News'
// 内容页面
import Content from '../components/content/Content'
// 制度表格
import System from '../components/system/System'
// 部门发文
import File from '../components/file/File'
// 掌上学习
import Study from '../components/study/Study'
Vue.use(Iview)
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      // 登陆
      path: '/login.html',
      name: 'Login',
      component: Login
    },
    {
      // 今日值班
      path: '/onDuty.html',
      name: 'OnDuty',
      component: OnDuty
    },
    {
      // 维修资质
      path: '/repair.html',
      name: 'Repair',
      component: Repair
    },
    {
      // 消息列表
      path: '/news.html',
      name: 'News',
      component: News
    },
    {
      // 内容页面
      path: '/content.html',
      name: 'Content',
      component: Content
    },
    {
      // 制度表格
      path: '/system.html',
      name: 'System',
      component: System
    },
    {
      // 部门发文
      path: '/file.html',
      name: 'File',
      component: File
    },
    {
      // 掌上学习
      path: '/study.html',
      name: 'Study',
      component: Study
    }
  ]
})
