<!-- 已接任务 -->
<template>
	<view>

		<view class="renWU_row bgff">
			<view class="title_df z3 pd">
				已接垫付任务
			</view>
			<view class="btm pt20 pm20">
				<view class="cen ">

					<navigator class="cls_3" url="/pages/taskHL/taskList">
						<view class="fz28 z6">
							未完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task1.png" class="sd_drrrtty"></image>
						</view>
					</navigator>

					<navigator class="blm cls_3" url="/pages/taskHL/offStocksList">
						<view class="fz28 z6">
							已完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task2.png" class="sd_drrrtty"></image>
						</view>

					</navigator>


					<navigator class="blm cls_3" url="/pages/taskHL/HadWithdrawn">
						<view class="fz28 z6">
							已撤销
						</view>
						<view class="mt20">
							<image src="../../static/img/task3.png" class="sd_drrrtty"></image>
						</view>


					</navigator>

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

					<navigator class="cls_3" url="/pages/taskHL/taskList?type=2">
						<view class="fz28 z6">
							未完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task1.png" class="sd_drrrtty"></image>
						</view>
					</navigator>

					<navigator class="blm cls_3" url="/pages/taskHL/offStocksList?type=2">
						<view class="fz28 z6">
							已完成
						</view>
						<view class="mt20">
							<image src="../../static/img/task2.png" class="sd_drrrtty"></image>
						</view>

					</navigator>


					<navigator class="blm cls_3" url="/pages/taskHL/HadWithdrawn">
						<view class="fz28 z6">
							已撤销
						</view>
						<view class="mt20">
							<image src="../../static/img/task3.png" class="sd_drrrtty"></image>
						</view>


					</navigator>

					<view class="qc"></view>
				</view>
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
