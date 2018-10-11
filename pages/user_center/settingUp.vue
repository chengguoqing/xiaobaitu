<!-- 设置 -->
<template>
	<view>
		<view class="bgff sd_lh_der pd bbm pr" :class="sd.clsss_s" v-for="sd in user_meat" @click="sd_jhd(sd.url_er)">
			<view class="h_dfg_le cz">
				<icon class="dx  cz" :class="sd.icon"></icon>
			</view>
			<text class="ml10 fz30 z6">{{sd.name}}</text>
			<text class="sd_dfth fz26" v-if="sd.jindu">{{sd.jindu}}</text>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				user_meat: [{
						size: "20",
						clsss_s: "ah", //class名字
						jindu: "",
						icon: "icon-icon-test", //图标名字
						name: "密码修改",
						url_er: "/pages/user_center/changeLogiNPassword" //跳转地址
					},
					{
						size: "16",
						clsss_s: "aj", //class名字
						icon: "icon-qiehuanzuhu", //图标名字
						name: "退出账号",
						jindu: "",
						url_er: "" //跳转地址
					},
				]

			}
		},
		components: {},
		methods: {
			sd_jhd: function(url_e) {
				if (!url_e) {
					uni.showModal({
						title: '',
						content: '确定退出？',
						success: function(res) {
							if (res.confirm) {
								uni.reLaunch({
									url: '/pages/user_center/Login'
								});
							}
						}
					});
					return
				}
				uni.navigateTo({
					url: url_e
				});
			}
		},
		mounted() {},
	}
</script>
<style scoped></style>
