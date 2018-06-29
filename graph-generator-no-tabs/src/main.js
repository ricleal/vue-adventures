import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import App from './App.vue'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// index.js or main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(Vuex)

export const eventBus = new Vue();

//VueX store
const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter: state => state.counter
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--
  }
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

