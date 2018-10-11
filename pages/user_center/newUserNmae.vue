<!-- 用户名修改 -->
<template>
	<view>
		<dx_input type='2' placeholder='请填写新的手机号'></dx_input>
		<dx_input type='2' placeholder='请输入验证码' rightText='获取验证码' @rTextCabat='rTextCabat'></dx_input>
		<dx_input type='3' placeholder='填写登录密码'></dx_input>

		<view class='dx_btn bgff ls fz32 yj4 mt40 cen' @click="tijiao"> 提交 </view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			tijiao() {
				uni.switchTab({
					url: '/pages/user_center/user_center'
				});
			},
			rTextCabat() {

			}
		},
		mounted() {},
	}
</script>
<style scoped></style>
