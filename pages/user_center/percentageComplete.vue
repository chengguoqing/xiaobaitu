<!-- 完成率 -->
<template>
	<view>
	<view class="pd pr">
		<image src="../../static/img/xiaols_bg.png" class="w100" mode="widthFix"></image>


		<view class="mt60 cen">
			<text class="sd_jh_derterter">
				<text class="z3 fz32">接单规则</text>
			</text>
		</view>

		<view class="z6 fz30 dfg_jfrrtt">
			平台采用派单机制,用户打开APP,登录平台后,需开启接单模式,选择 愿意接单的任务类型等条件,等待系统派单,系统有订单时,会根据如下 几个规则综合后选择用户派单:
		</view>

		<view class="mt10 fz26 z9 dfg_jfrrtt">
			1.开启接单模式的用户<br /> 2.符合商家对账号的要求
			<br /> 3.符合平台对时间间隔和订单数量的要求
			<br /> 4.优先给完成率高、被投诉率低、接单量少的用户
		</view>

		<view class="mt60 cen">
			<text class="sd_jh_derterter">
				<text class="z3 fz32">完成率</text>
			</text>
		</view>

		<view class="z6 fz30 dfg_jfrrtt">

			完成率是指你完成的订单数占所有系统派送给你的订单总数百分比。
		</view>

		<view class="mt10 fz26 z9 dfg_jfrrtt">

			1.系统派单之后不去操作,造成超时系统自动取消订单<br> 2.用户要求商家取消订单(或商家要求用户取消订单)
			<br> 3.用户自行取消订单
			<br> 4.管理员撤销的订单
		</view>

		<view class="mt10 fz26 z9 dfg_jfrrtt">
			维持高完成率可以保持平台对商家和用户的可靠性,也会增加系统 派送订单给你的优先级。

		</view>

</view>
<view class="bgff_dert">
	
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
	.sd_jh_derterter {
    border-top: 2px solid #000;
    padding-left: 8px;
    padding-right: 8px;
}

.sd_jh_derterter text {
    background: #fff;
    position: relative;
    bottom: 25upx;
}
.bgff_dert{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #fff;
}
.dfg_jfrrtt{
	line-height: 1.5;
}


</style>
