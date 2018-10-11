<!-- 提现明细 -->
<template>
	<view>
		<view class="pt20 pm20 bgff dx_row cen">
			<view class="dx_col_8 z6 fz30">
				实际到账金额
			</view>
			<view class="dx_col_8 z6 fz30">
				状态
			</view>
			<view class="dx_col_8 z6 fz30">
				时间
			</view>
		</view>
		
		
		<view class="pt20 pm20  dx_row cen" v-for="sd in 20">
			<view class="dx_col_8 z6 fz30">
				871.00
			</view>
			<view class="dx_col_8 z6 fz30">
				申请中
			</view>
			<view class="dx_col_8 z6 fz30">
				2018-10-04
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
	
</style>
