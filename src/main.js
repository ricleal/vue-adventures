import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

export const EventBus = new Vue();

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
