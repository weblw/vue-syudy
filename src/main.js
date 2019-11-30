import Vue from 'vue'
import App from './App.vue'

import create from './components/notice/create'
import router from './components/router/k-router'

import store from './components/vuex/k-store'

Vue.prototype.$create=create

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
