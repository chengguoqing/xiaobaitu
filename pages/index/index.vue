<template>
	<view >
		<view class="dd_ijh_der cen pm20">
			 
				<view class="cls_2">
					<view class="fz32 cf">
						佣金收益(金)
					</view>
					<view class="fz70 cf mt30">
						0.00
					</view>
				</view>
				<view  class="cls_2">
					<view class="s_jh_right">
						<view class="fz32 cf">
							本金收益(金)
						</view>
						<view class="fz70 cf mt30">
							0.00
						</view>
					</view>
				</view>
				<view class="qc">
					
				</view>
			

		</view>

		<view class="cf fz26 fg_jgh_drrt cen pt20 pm20">
		
				<view class="cls_3">
					今日收入0.00金
				</view>
				<view class="cls_3">
					<view class="s_jh_right">
						任务收入0.00金
					</view>
				</view>

				<view class="cls_3">
					<view class="s_jh_right">
						推广奖励0.00金
					</view>
				</view>
				<view class="qc">
					
				</view>
		
		</view>

		<view class="gonggao pd bgff dian">
			<icon class="dx icon-systemprompt_fill ye laBa cz"></icon>
			<text class="ye fz30 cz">公共</text>
			<text class="z6 fz28 ml10 cz">国庆期间体检，银行处理延迟通知</text>
		</view>

		<view class="mt20 bgff pd xinShoujiao">
			<view class="jiao_leyf cz">
				<icon class="dx icon-remind_fill"></icon>
			</view>
			<text class="fz34 cz z6 ml10">新手教学</text>
		</view>

		<view class="jieDanBtn">
			接 单
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
			console.log(this.$store.state.test_df)
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>
<style scoped>


	.s_jh_right {
		border-left: 1px solid #fff;
	}

	

	.gonggao {
		line-height: 80upx;
	}

	.laBa {
		font-size: 70upx;
	}

	.xinShoujiao {
		line-height: 120upx;
	}

	.jiao_leyf {
		width: 80upx;
		height: 80upx;
		background: #8CB9D6;
		border-radius: 50%;
		text-align: center;
		line-height: 80upx;
		display: inline-block;
	}

	.jiao_leyf icon {
		font-size: 55upx;
		color: #fff;
	}
</style>
