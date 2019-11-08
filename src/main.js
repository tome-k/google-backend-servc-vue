import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'

window.$ = window.jQuery = jQuery

Vue.component('Navbar', require('./components/Navbar').default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
