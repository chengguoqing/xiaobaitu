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

import dx_tab from './components/dx_tab.vue'
Vue.component('dx_tab',dx_tab)

import dx_gd from './components/dx_gd.vue'
Vue.component('dx_gd',dx_gd)

import dx_wujilu from './components/dx_wujilu.vue'
Vue.component('dx_wujilu',dx_wujilu)

App.mpType = 'app'
Vue.use(base)
const app = new Vue({
	store,
    ...App
})
app.$mount()
