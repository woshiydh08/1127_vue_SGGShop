import Vue from 'vue'
import App from './App'
import router from './router/index'
import TopHeader from './components/TopHeader/TopHeader'

Vue.component('TopHeader',TopHeader)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
