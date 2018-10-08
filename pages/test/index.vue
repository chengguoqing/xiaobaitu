<template>
	<view  class="tefd_d">
	<dx_list :title='sd.id' v-for="sd in forw"></dx_list>
	
	</view>
</template>
<script>
	import {
		config
	} from "../../static/js/config.js"
	export default {
		data() {
			return {
				forw:[
					{id:0},
					{id:1},
					{id:2},
					{id:3},
					{id:4},
				]
			}
		},
		computed: {
			tefd_d(){
				let sd_df=['a','b','c','d','e','f','g','h']
				this.forw.map(a=>{
					a.id=sd_df[a.id]
				})
				return  this.forw
			}
		},
		components: {},
		methods: {
			test_sd() {
				return '55658777'
			}
		},
		mounted() {
			setTimeout(a=>{
				this.forw[2].id=0
			},5000)
			console.log(this.car_number)
		},
	}
</script>
<style scoped>


</style>
