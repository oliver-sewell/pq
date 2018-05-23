import Vue from 'vue'
import App from './App.vue'
import normalize from 'normalize.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { routes } from './router'

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

import { store } from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
