import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './js/routes'
import swal from 'sweetalert'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(infiniteScroll);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

export const bus = new Vue();

var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
