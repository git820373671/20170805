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
    }
  ]
})
