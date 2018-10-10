<!-- 公告 -->
<template>
	<view>
		
		<navigator class="pd pt20 pm20 bbm bgff" v-for="sd in 20" url="/pages/index/noticeXq"> 
			<view class="fz30 z3">
				标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题
				<text class="red fz30">NEW</text>
			</view>
			<view class="z9 fz26">
				2018-08-29
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
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		mounted() {},
	}
</script>
<style scoped></style>
