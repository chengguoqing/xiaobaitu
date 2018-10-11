<!-- 找回密码 -->
<template>
	<view class="pt20">

		<view class="bbm">
			<dx_input v-model="form.mobile" type="2" placeholder="手机号码"></dx_input>
			<dx_input v-model="form.verifyCode" type="2" placeholder="请输入验证码" rightText="获取验证码" @rTextCabat="rTextCabat"></dx_input>
		</view>


		<view class="bbm mt20">
			<dx_input v-model="form.jpassword" type="3" placeholder="请输入新密码"></dx_input>
			<dx_input v-model="form.password" type="3" placeholder="请确认新密码"></dx_input>
		</view>

		<button class="ls fz32 mt20 bgff">确认</button>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				yzm: "",
				form: {
					key: "",
					mobile: "", //	手机号
					verifyCode: "", //验证码	
					jpassword: "", //第一次输入密码
					password: "" //弟二次新密码
				}
			}
		},
		components: {},
		methods: {
			rTextCabat() {
				console.log(223)
			},
			zhuce_btn() { //注册按钮点击
				uni.showModal({
					title: '用户注册',
					content: '请选择注册类型',
					cancelText: "没有邀请",
					confirmText: "拿10元",
					success: function(res) {
						if (res.confirm) { //拿10元奖励
							uni.navigateTo({
								url: '/pages/register/register?type=1'
							});
						} else if (res.cancel) { //没有邀请人
							uni.navigateTo({
								url: '/pages/register/register?type=2'
							});
						}
					}
				});
			}
		},
		mounted() {

		},
		onNavigationBarButtonTap() {
			this.keFu()
		}
	}
</script>
<style scoped>
	.df_cdeeert {
		background: #fff !important;
	}
</style>
