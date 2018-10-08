<!-- 申诉中心 -->
<template>
	<view v-if="is_show">
		
	</view>
</template>
<script>
	export default {
		data() { 
			return {}
		},
		onReady() {
			this.is_show = true
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped></style>
