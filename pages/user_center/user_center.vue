<!-- 个人中心 -->
<template>
	<view>
		<view class="dd_ijh_der cen pm20">
			<image src="../../static/img/user_icon.png" class="user_icon"></image>
			<view class="fz28 cf">
				ID:134646
			</view>
		</view>
		<view class="cf fz25 fg_jgh_drrt cen pt20 pm20">
			<view class="cls_2">
				<view class="fz30">账号：135****0372</view>
				<view class="fz24 mt5">
					(点击可修改用户名)
				</view>
			</view>
			<view class="cls_2 blm">
				<view class="fz30">等级：铜牌会员</view>
				<view class="fz24 mt5">
					(等级根据接单次数)
				</view>
			</view>

			<view class="qc">

			</view>
		</view>


		<view class="bgff sd_lh_der pd bbm pr" @click="sd_jhd(sd.url_er)" :class="sd.clsss_s" v-for="sd in user_meat">
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
						size: "16",
						clsss_s: "aa", //class名字
						jindu: "",
						icon: "icon-share_fill", //图标名字
						name: "账号绑定",
						url_er: "/pages/bind_account/bind_account" //跳转地址
					},
					{
						size: "18",
						clsss_s: "ab", //class名字
						icon: "icon-setup_fill", //图标名字
						name: "设置",
						jindu: "",
						url_er: "/pages/settingUp/settingUp" //跳转地址
					},
					{
						size: "22",
						clsss_s: "ac", //class名字
						icon: "icon-zhuyi", //图标名字
						name: "完成率",
						jindu: "33%",
						url_er: "/pages/percentageComplete/percentageComplete" //跳转地址
					},
					{
						size: "18",
						clsss_s: "ad", //class名字
						icon: "icon-remind_fill", //图标名字
						name: "新手教学",
						jindu: "",
						url_er: "/pages/tutorial/tutorial?url=http://test.xiaobay.com/api/guide&title=新手教程" //跳转地址
					}, {
						size: "20",
						clsss_s: "ae", //class名字
						icon: "icon-llmenuwmnotice2", //图标名字
						name: "推广赚金",
						jindu: "",
						url_er: "/pages/expandGold/expandGold" //跳转地址
					}, {
						size: "20",
						clsss_s: "af", //class名字
						icon: "icon-feiji", //图标名字
						name: "帮助与客服",
						jindu: "",
						url_er: "/pages/tutorial/tutorial?url=http://test.xiaobay.com/api/help&title=帮助" //跳转地址
					}, {
						size: "16",
						clsss_s: "ag", //class名字
						icon: "icon-banbenqiehuan", //图标名字
						jindu: "",
						name: "版本信息",
						url_er: "/pages/versions/versions" //跳转地址
					}
				],

			}
		},
		components: {},
		methods: {
			sd_jhd: function(url_e) {
				uni.navigateTo({
					url: url_e
				});
			}
		},
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		mounted() {},
	}
</script>
<style scoped>
	.user_icon {
		width: 160upx;
		height: 160upx;
	}
</style>
