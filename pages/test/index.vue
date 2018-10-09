<template>
	<view class="">
		<dx_tab :title_d="title_d"></dx_tab>
	</view>
	 
</template>
<script>
	export default {
		data() {
			return {
				title_d: [{
					name: "我发起的申诉",
					cls: "act",
					page: 1,
					date_df: [{
						id: 0
					}, {
						id: 1
					}]
				}, {
					name: "我收到的申诉",
					cls: "",
					page: 1,
					date_df: [{
						id: 3
					}, {
						id: 4
					}]
				}]
			}
		},
		components: {

		},
		computed : {
			
		},
		methods: {
		
		},
	

	}
</script>

<style scoped>
	
</style>
