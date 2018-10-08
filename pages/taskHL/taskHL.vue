<!-- 已接任务 -->
<template>
	<view >

		<view class="renWU_row bgff">
			<view class="title_df z3 pd">
				已接垫付任务
			</view>
			<view class="btm pt20 pm20">
				<view class="cen ">

					<view class="cls_3">
						<view class="fz28 z6">
							未完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task1.png" class="sd_drrrtty"></image>
						</view>
					</view>

					<view class="blm cls_3">
						<view class="fz28 z6">
							已完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task2.png" class="sd_drrrtty"></image>
						</view>

					</view>


					<view class="blm cls_3">
						<view class="fz28 z6">
							已撤销
						</view>
						<view class="mt20">
							<image src="../../static/img/task3.png" class="sd_drrrtty"></image>
						</view>


					</view>

<view class="qc"></view>
				</view>
			</view>
		</view> 





		<view class="renWU_row bgff mt20">
			<view class="title_df z3 pd">
				已接浏览任务
			</view>
			<view class="btm pt20 pm20">
				<view class="cen ">

					<view class="cls_3">
						<view class="fz28 z6">
							未完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task1.png" class="sd_drrrtty"></image>
						</view>
					</view>

					<view class="blm cls_3">
						<view class="fz28 z6">
							已完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task2.png" class="sd_drrrtty"></image>
						</view>

					</view>


					<view class="blm cls_3">
						<view class="fz28 z6">
							已撤销
						</view>
						<view class="mt20">
							<image src="../../static/img/task3.png" class="sd_drrrtty"></image>
						</view>


					</view>

<view class="qc"></view>
				</view>
			</view>
		</view>
		
		
		
		
		


	</view>
</template>
<script>
	export default {
		data() {
			return {
			}
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
<style scoped>
	.title_df {
		line-height: 60upx;
		font-size: 26upx;
	}

	.sd_drrrtty {
		width: 110upx;
		height: 110upx;
	}
</style>
