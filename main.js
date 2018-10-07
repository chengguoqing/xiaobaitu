import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import dx_input from './components/dx_input.vue'
Vue.component('dx_input',dx_input)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
