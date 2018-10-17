<!-- 任务详情 -->
<template>
	<view>
		<view class="bgff">


			<view class="pt20 pd">
				<image src="../../static/img/fenming.jpg" class="fenming fl"></image>
				<view class="ov pl20 pr df_jh_dertxf">
					<view class="z3 fz30 ln">
						商品成交价格:<text class="red">￥149.00</text>
						<view class="">
							件数和规格: <text class="red">1</text>
						</view>
					</view>

				</view>
				<view class="qc">

				</view>
			</view>
			<view class="pt20 pm20 z3 btm mt20 fz28 pd">
				任务状态:已取消
			</view>
			<view class="pt20 pm20  btm red fz28 pd">
				商家要求:无特殊要求
			</view>
			<view class="pt20 pm20  btm red fz28 pd">
				订单留言:无特殊要求
			</view>
			<view class="pt10 pm10 pd btm">
			
				<navigator class="bgls yj4 df_f_renwyu fz30" url="/pages/complaint/tijiaocomplaint">
					申述任务
				</navigator>
			</view>

		</view>


		<view class="pd dx_row fz28 z9 pt20 pm20">
			<view class="dx_col_12 ">
				接受任务
			</view>
			<view class="dx_col_12 tr">
				2018-10-02
			</view>
		</view>

		<view class="bgff pd">
			<view class="dx_row fz30 z3 btm pt20 pm20">
				<view class="dx_col_12">订单编号</view>
				<view class="dx_col_12 tr ls">150822</view>

			</view>

			<view class="dx_row fz30 z3 btm pt20 pm20">
				<view class="dx_col_12">买号</view>
				<view class="dx_col_12 tr ls">就这么恶心麻烦</view>

			</view>

			<view class="dx_row fz30 z3 btm pt20 pm20">
				<view class="dx_col_12">商品金额</view>
				<view class="dx_col_12 tr ls">149.00</view>

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
	.df_f_renwyu {
		line-height: 60upx;
		display: inline-block;
		padding: 0px 30upx;
	}
</style>
