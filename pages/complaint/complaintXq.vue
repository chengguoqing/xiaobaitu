<!-- 申诉详情 -->
<template>
	<view>
		<view class="pd  z6 df_jh_deer">
			<icon class="dx icon-shenfenzheng fz38 cz "></icon>
			<text class="fz30 ml5 cz">申诉详情</text>
		</view>
		<view class="bgff pt20 pm20 dx_row pd">
			<image src="../../static/img/logo.png" class="fengmian_dr fl"></image>
			<view class="ov pl20">
				<view class="df_hg_der bbm dx_row">
					<view class="dx_col_8 fz30">
						任务编号
					</view>
					<view class="dx_col_16 fz30 tr">
						2016843 <text class="red">[详情]</text>
					</view>

				</view>

				<view class="df_hg_der bbm dx_row">
					<view class="dx_col_8 fz30">
						QQ号码：
					</view>
					<view class="dx_col_16 fz30 tr">
						1780312516
					</view>

				</view>

				<view class="df_hg_der bbm dx_row">

					<view class=" fz30 tr z9">
						如需要获取更多信息申请平台介入
					</view>

				</view>
			</view>
		</view>
		
		<view class="mt20 bgff pd pt20 pm20">
			<view class="yj4 dx_btn cen fz30 df_jh_deet cf">
				我不想做了，申请取消这个任务
			</view>
			<view class="pd z9 fz26 ln mt20">
				注：商家同意后任务取消，平台返款的本金将返回到商家本金账户，任务佣金将扣回或取消
			</view>
		</view>
		<view class="pd  z6 df_jh_deer">
			<icon class="dx icon-shijian fz40 cz "></icon>
			<text class="fz30 ml5 cz">状态详情</text>
		</view>
		
		<view class="pd ouy_tilte fz30 z3">
			投诉内容 2018-10-06
		</view>
		<view class="pd pm20 bgff">
			<view class="pt20 ln z6">
				类型:其他问题
			</view>
			<view class="pt20 ln z6">
				原因:我用错账号了这个账号不对
			</view>
		</view>
		<view class="pd ouy_tilte fz30 z3">
			协调处理
		</view>
		<view class="pd ln pt20 pm20 bgff fz30">
			<view class="z6">
				2018-10-06
			</view>
			<view class="z6">
				申诉人:我用错账号了这个账号不对
			</view>
		</view>
		
		
		<view class="btm dx_row fz30 foyu_jhg_drrt bgff">
			<view class="dx_col_8 ls">
				回复申诉
			</view>
			<view class="dx_col_8 ls blm">
				完结申诉
			</view>
			<view class="dx_col_8 ls blm">
				申请平台介入
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
	}
</script>
<style scoped>
	.df_jh_deer {
		line-height: 80upx;
	}

	.fengmian_dr {
		width: 180upx;
		height: 180upx;
	}

	.df_hg_der {
		line-height: 60upx;
	}
	.df_jh_deet{
		background: #74DE80;
	}
	.ouy_tilte{
		line-height: 70upx;
		background: #F7F7F7;
	}
	.foyu_jhg_drrt{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 999;
		text-align: center;
	}
	.foyu_jhg_drrt .dx_col_8{
		line-height: 100upx;
	}
	
</style>
