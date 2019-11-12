import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.scss'
import {fb} from './firebase'
import VueFirestore from 'vue-firestore'
import Swal from 'sweetalert2'

window.$ = window.jQuery = jQuery

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
Vue.use(VueFirestore);

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar').default)
Vue.component('add-to-cart', require('./components/AddToCart').default)

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

