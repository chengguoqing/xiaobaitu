<!-- 我的消息 -->
<template>
	<view>
		<view class="bgff pd pt10 pm15 bbm" v-for="sd in 20">
			<icon class="dx icon-systemprompt z9  fz34 cz"></icon>
			<text class="z9 fz26 ml5 ">2018-10-05 16:04:02</text>
			<view class="fz32 z6 mt5">
				很遗憾，很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>
<style scoped></style>
