import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import FUI from '@pkg/index.js'
// Vue.use(FUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
