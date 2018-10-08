import Vue from 'vue'
import App from './App'
 
import {base } from './static/js/base.js'

Vue.config.productionTip = false

import dx_input from './components/dx_input.vue'
Vue.component('dx_input',dx_input)
 
import dx_list from './components/dx_list.vue'
Vue.component('dx_list',dx_list)

import dx_mediaList from './components/dx_mediaList.vue'
Vue.component('dx_mediaList',dx_mediaList)

App.mpType = 'app'
Vue.use(base)
const app = new Vue({
    ...App
})
app.$mount()
