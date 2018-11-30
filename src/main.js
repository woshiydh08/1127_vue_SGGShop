import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router/index'
import store from './store/index'
import TopHeader from './components/TopHeader/TopHeader'

import './mock/mockServer'

Vue.component('TopHeader',TopHeader)
Vue.component(Button.name, Button) // <mt-button/>


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
