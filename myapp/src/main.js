// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
//import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
//import Home from './components/Home'

import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import 'iview/dist/styles/iview.css';

//Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(iView)

// const routes = [{
//   path : '/',
//   component : Home
// }];

// const router = new VueRouter({
//   routes
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
