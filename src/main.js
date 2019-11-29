import Vue from 'vue'
import App from './App.vue'

import create from './components/notice/create'

Vue.prototype.$create=create

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
