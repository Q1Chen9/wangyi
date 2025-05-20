import Vue from "vue"
import App from "./App.vue"

import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router    // 5,建立联系
}).$mount('#app')