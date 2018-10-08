<template>
	<view>
		<web-view :src="url_d"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				url_d: ""
			}
		},
		onLoad: function(options) {
			this.url_d = options.url
			uni.setNavigationBarTitle({
				title: options.title
			});
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped></style>
