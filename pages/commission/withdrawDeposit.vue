<!-- 提现 -->
<template>
	<view>
		<view class="pd pt20">
			<view class="tr ls fz28">
				<navigator url="/pages/commission/withdrawalSubsidiary" class="xiahua_d">查看明细</navigator>
			</view>
			<view class="fz30 z3 mt10">
				请选择提款金额，并输入登录密码
			</view>
			<view class="z9 fz28 mt20 ln">
				提现说明：佣金提现最低50金起且需要扣除手续费2金，提现100金起免费手续费，提现200金奖励2金，提现300金奖励3金...以此类推，1000封顶.
			</view>
		</view>
		<view class="mt20 bgff dx_btn pd fz30 z6">
			银行：招商银行
		</view>
		<view class="mt20">
			<dx_input  type="2" placeholder='佣金提现金额'></dx_input>
			<dx_input  type="3" placeholder='输入登录密码'></dx_input>

		</view>
		
		<view class="mt40 dx_btn cen fz32 ls bgff">
			确认
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
		onLoad:function(od){
			uni.setNavigationBarTitle({
				title:od.title
			})
		},
		mounted() {},
	}
</script>
<style scoped>
	.xiahua_d {
		display: inline-block;
		text-decoration: underline;
	}
</style>
