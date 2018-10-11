<!-- 我的消息 -->
<template>
	<view>
		<navigator class="bgff pd pt10 pm15 bbm" v-for="sd in 20" url="/pages/message/messageXq">
			<view class=" df_df_drertt">
				
		
			<icon class="dx icon-systemprompt z9  fz34 cz"></icon>
			<text class="z9 fz26 ml5 cz">2018-10-05 16:04:02</text>
			</view>

			<view class="fz30 z6  df_deeettxc">
				很遗憾，很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾很遗憾
			</view>
		</navigator>
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
<style scoped>
	.df_df_drertt icon{
		position: relative;
		bottom: 10upx;
	}
	.df_deeettxc{
		line-height: 1.5;
	}
</style>
