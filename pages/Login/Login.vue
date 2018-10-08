<!-- 登录 -->
<template>
	<view class="pt20">
		<view class="bbm">
			<dx_input v-model="form.mobile" type="2" placeholder="手机号码"></dx_input>
			<dx_input v-model="form.password" type="3" placeholder="密码" rightText="忘记密码" @rTextCabat="rTextCabat"></dx_input>
		</view>
		<button class="ls fz32 mt20 bgff">登录</button>
		<view class="mt40 cen fz28 pm5" @click="zhuce_btn()">
			<ins class="z9">还没有注册账号，注册点这里！</ins>
		</view>
		<view class="cen ls  fz26 mt10">新手咨询群：520043520</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					mobile: "", //手机号（称作会员名）
					password: "", //密码
					key: "" //key
				}
			}
		},
		components: {},
		methods: {
			rTextCabat() {
				uni.navigateTo({
					url:"/pages/retrievePassword/retrievePassword"
				})
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
