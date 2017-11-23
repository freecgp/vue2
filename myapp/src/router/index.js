import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries.vue'
import LogTime from '@/components/LogTime.vue'
import FengCao from '@/components/FengCao'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/fengcao',
    //   name: 'FengCao',
    //   component: FengCao
    // },
    // {
    //   path: '/time-entries',
    //   name: 'TimeEntries',
    //   component: TimeEntries,
    //   children:[
    //     {path:'/time-entries/log-time',component: LogTime}
    //   ]
    // }
  ]
})
