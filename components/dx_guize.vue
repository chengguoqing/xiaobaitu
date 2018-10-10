<template>
	<view class="sd_jh_deertxe">
		<view class="guize_der">
			<icon class="dx icon-close colos_er fz40 z9" @click="$emit('close_d')"></icon>
			<view class="ls fz36 cen df_jdf_rt  z9">
				-- 活动规则 --
			</view>

			<scroll-view scroll-y="true" class="sd_jh_deettx ">
				<view class="pl30 pr30 diy_dertyxd fz26 z3 pr">
					<view v-for="sd in 20">
						活动时间：活动时间活动时间活动时间活动时间活动时间活动时间活动时间活动时间活动时间
					</view>

				</view>
			</scroll-view>

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
	.sd_jh_deertxe {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 9999;
	}

	.guize_der {
		width: 700upx;
		height: 1000upx;
		background: #fff;
		position: absolute;
		left: 0;
		top: 0px;
		bottom: 0px;
		right: 0px;
		margin: auto;
		border-radius: 4px;
	}

	.df_jdf_rt {
		margin-top: 40upx;
	}

	.colos_er {
		position: absolute;
		right: 20upx;
		top: 10upx;
	}

	.sd_jh_deettx {
		margin-top: 20upx;
		height: 850upx;
	}

	.diy_dertyxd view {
		position: relative;
	}

	.diy_dertyxd view {
		margin-bottom: 15upx;
	}

	.diy_dertyxd view::after {
		content: ' ';
		position: absolute;
		left: -20upx;
		top: 15upx;
		width: 8upx;
		height: 8upx;
		border-radius: 50%;
		background: #63BD96;
	}
</style>
