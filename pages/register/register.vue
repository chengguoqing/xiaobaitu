<!-- 注册 -->
<template>
	<view class="pt20">

		<dx_input v-model="form.pid" placeholder="请输入邀请人ID" class="bbm" v-if="isYaoqing==1"></dx_input>
		<view class="pl30 fz26 pt10 pm10" v-if="isYaoqing==1">
			官方邀请人ID：100000
		</view>

		<view class="bbm">
			<dx_input v-model="form.mobile" type="2" placeholder="请输入手机号码"></dx_input>
			<dx_input v-model="form.verifyCode" type="2" placeholder="请输入验证码" rightText="获取验证码" @rTextCabat="rTextCabat"></dx_input>
		</view>

		<view class="bbm mt20">
			<dx_input v-model="form.jpassword" type="3" placeholder="请输入8-16位密码"></dx_input>
			<dx_input v-model="form.password" type="3" placeholder="请确认密码"></dx_input>
		</view>

		<button class="ls fz26 mt20 bgff">注册</button>




	</view>
</template>
<script>
	export default {
		data() {
			return {
				isYaoqing:2,
				form: {
					pid: "", //邀请人id
					mobile: "", //手机号
					verifyCode: "", //验证码
					jpassword: "", //第一次输入的密码
					password: "", //第二次输入的密码
					mobileImei: "", //手机序列号
					mobileOs: "", //手机操作系统，1：安卓，2：苹果
					key: "" //key值    
				}
			}
		},
		components: {},
		onLoad: function(options) {
				this.isYaoqing=options.type
				console.log(options.type)
		},
		methods: {
			rTextCabat() {
				console.log(223)
			}
		},
		mounted() {

		},
		onNavigationBarButtonTap() {
			uni.showActionSheet({
				itemList: ['返款问题：993768343', '客服一：993768343', '客服er：993768343', '客服三：993768343'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		}
	}
</script>
<style scoped>
	.df_cdeeert {
		background: #fff !important;
	}
</style>
