import Vue from 'vue'
import App from './App'
 import store from './store'
  Vue.prototype.$store = store
import {base } from './static/js/base.js'

Vue.config.productionTip = false

import dx_input from './components/dx_input.vue'
Vue.component('dx_input',dx_input)
 
import dx_list from './components/dx_list.vue'
Vue.component('dx_list',dx_list)

import dx_mediaList from './components/dx_mediaList.vue'
Vue.component('dx_mediaList',dx_mediaList)

import dx_col from './components/dx_col.vue'
Vue.component('dx_col',dx_col)

import dx_row from './components/dx_row.vue'
Vue.component('dx_row',dx_row)
App.mpType = 'app'
Vue.use(base)
const app = new Vue({
	store,
    ...App
})
app.$mount()
