<!-- 绑定淘宝 -->
<template>
	<view>


		<view class="bgff pd pt20 pm20 bbm" v-for="sd in 3">
			<view class=" ">
				<view class="z9">
					<icon class="dx icon-wangwang cz fz40"></icon>
					<text class="cz fz30 ml10">fhejmrd</text>
					<text class="fz30 fr red mt5">账号未通过</text>
					<view class="qc"></view>
				</view>
				<view class="dx_row mt10">
					<view class="dx_col_18 dfs_jh_dert fz28 z9">
						收货地址：广东省广州市广东省广州市广东省广州市广东省广州市广东省广州市<br>
						手机:15011773191<br>
						联系人:李宏伟
					</view>
					<navigator class="dx_col_6 tr z9 pt30" url="/pages/BindingTaobao/BindingTaobaoXq">
						<icon class="dx icon-bianji fz60"></icon>
					</navigator>
				</view>
				<view class="fz28 red mt10">
					审核未通过原因:最近购买量不稳定，请先养号后再绑定
				</view>
			</view>
		</view>
		<button class="ls fz32 mt60 bgff dsf_dfrrtyx" @click="cuowu_e">新增一个淘宝账号</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			cuowu_e() { //新增一个淘宝账号
				uni.showToast({
					icon: "none",
					title: '错误提示',
					duration: 2000
				})
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.dfs_jh_dert {
		line-height: 1.4;
	}

	.dsf_dfrrtyx {
		position: fixed;
		left: 0;
		width: 100%;
		bottom: 40upx;
	}
</style>
