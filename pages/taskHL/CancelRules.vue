<!-- 取消规则 -->
<template>
	<view>
		<view class="pd pr">
			<image src="../../static/img/xiaols_bg.png" class="w100" mode="widthFix"></image>


			<view class="mt60 cen">
				<text class="sd_jh_derterter">
					<text class="z3 fz32">取消规则</text>
				</text>
			</view>

			<view class="z6 fz30 dfg_jfrrtt ln">
				平台中有如下几种取消类型及规则:<br>
				1.超时未提交系统自动取消(普通垫付任务2小时,普通浏览任务1小时
				特别任务时间以商家实际设置时间为准):垫付单扣1金,浏览单扣0.2
				金,计入完成率;任务佣金将取消<br>
				2.用户自己取消:15分钟内取消无责,超过15分钟取消不扣金,计入完成
				率;任务佣金将取消<br>
				3申诉协商取消:不扣金,计入完成率;已返款或已完成的任务撤销成功
				后平台返款的本金将返还到商家本金账户,任务佣金将扣回<br>
				4.平台管理员取消:取消不扣金,计入完成率;已返款或已完成的任务撤
				销成功后平台返款的本金将返还到商家本金账户,任务佣金将扣回
				完成率是系统派单参考的其中一个因素,用户尽量不要随意取消任务,以
				免影响到完成率,从而降低系统派单给你的优先级。
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

	.bgff_dert {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #fff;
	}

	.dfg_jfrrtt {
		line-height: 1.5;
	}
</style>
