<template>
	<view>
		<view class="dd_ijh_der cen pm20">

			<navigator class="cls_2" url="/pages/commission/list?title=佣金账户">
				<view class="fz32 cf">
					佣金收益(金)
				</view>
				<view class="fz70 cf mt30">
					0.00
				</view>
			</navigator>
			<navigator class="cls_2" url="/pages/commission/list?title=本金账户">
				<view class="s_jh_right">
					<view class="fz32 cf">
						本金收益(金)
					</view>
					<view class="fz70 cf mt30">
						0.00
					</view>
				</view>
			</navigator>
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

		<navigator class="gonggao pd bgff dian" url="/pages/index/notice">
			<icon class="dx icon-systemprompt_fill ye laBa cz"></icon>
			<text class="ye fz30 cz">公共</text>
			<text class="z6 fz28 ml10 cz">国庆期间体检，银行处理延迟通知</text>
		</navigator>

		<navigator class="mt20 bgff pd xinShoujiao pt15 pm15 pr" url="/pages/examination/index">
			<view class="jiao_leyf cz fl mt5 ab">
				<icon class="dx icon-zhuyi"></icon>
			</view>
			<view class="ov pl20 df_drrrty">
				<text class="fz34 cz z6 ">新手任务</text>
				<view class="fz26 z9">
					完成新手任务，领取新手奖励！
				</view>
			</view>
			<view class="qc">

			</view>
			<icon class="dx icon-right1 right_dert z9"></icon>
		</navigator>


		<navigator class=" bgff pd xinShoujiao pt15 pm15 pr btm" url="/pages/tutorial/tutorial?url=http://test.xiaobay.com/api/guide&title=新手教程">
			<view class="jiao_leyf cz fl mt5">
				<icon class="dx icon-remind_fill"></icon>
			</view>
			<view class="ov pl20 df_drrrty">
				<text class="fz34 cz z6 ">新手教学</text>
				<view class="fz26 z9">
					学习新手教学后在做任务哦！
				</view>
			</view>
			<view class="qc">

			</view>
			<icon class="dx icon-right1 right_dert z9"></icon>
		</navigator>


	
		<navigator url="/pages/taskHL/orderReceiving" class="jieDanBtn">接 单</navigator>

 <dx_guize v-if="is_guiz" @close_d="is_guiz=false"></dx_guize> 
	</view>
</template> 
<script>
	import dx_guize from "../../components/dx_guize.vue"
	export default {
		data() {
			return {
				is_guiz:true
			}
		},
		components: {
			dx_guize
		},
		methods: {

		},
		mounted() {
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

.df_drrrty{
	line-height: 1.5;
}

	.gonggao {
		line-height: 80upx;
	}

	.laBa {
		font-size: 70upx;
	}

	.xinShoujiao {}

	.jiao_leyf {
		width: 80upx;
		height: 80upx;
		background: #8CB9D6;
		border-radius: 50%;
		text-align: center;
		line-height: 80upx;
		display: inline-block;
	}

	.jiao_leyf.ab {
		background: #63BD96;
	}

	.jiao_leyf icon {
		font-size: 55upx;
		color: #fff;
	}

	.right_dert {
		position: absolute;
		right: 20upx;
		top: 30upx;

	}
</style>
