<!-- 佣金列表 -->
<template>
	<view>
		<navigator  class="pd bbm pt20 pm20 bgff dsf_rt_ce" v-for="sd in 20" url="/pages/commission/particulars">
			<view class="dx_row">
				<view class="dx_col_18 dian fz30">
					签到奖励
					<view class="fz28 z9">
						2018-10-07 14:38:02
					</view>
				</view>
				<view class="dx_col_6 dian fz28 red tr">
					+0.01
					<view class="fz28 z9">
						余额 0.01
					</view>
				</view>
			</view>
		</navigator>
		
<dx_wujilu  v-if="false"></dx_wujilu>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				titke_d:""
			}
		},
		components: {},
		methods: {},
		mounted() {},
		onLoad:function(zhi){
			this.titke_d=zhi.title
			uni.setNavigationBarTitle({
				title:zhi.title
			})
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"/pages/commission/withdrawDeposit?title="+this.titke_d
			})
		}
	}
</script>
<style scoped>
	.dsf_rt_ce{
		line-height: 1.5;
	}
</style>
