import Vue from 'vue'
import App from './App'
import router from './router.js'
import Vuetify from 'vuetify'
import store from './storage.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
