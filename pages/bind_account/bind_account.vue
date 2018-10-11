<!-- 账号绑定 -->
<template>
	<view>
		<view class="list_dfg pd fz32">
			账户信息 <text class="ls fz26">(账户信息必填,银行卡信息与身份证一致)</text>
		</view>
		<navigator class="list_dfg pd fz32 btm" url="/pages/bind_account/identity_card">
			身份证信息 <text class="red">必填</text>
			<view class="df_right fz26 z9">
				<text class="cz">已绑定</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</navigator>
		<navigator class="list_dfg pd fz32 btm" url="/pages/bind_account/BankCardBinding">
			银行卡
			<view class="df_right fz26 z9">
				<text class="cz">修改</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
			<view class="df_jh_dewr pm10">
				<view class="fz28 z9 ">
					中国建设银行
				</view>
				<view class="fz26 z9">
					李宏伟 6236 6833 2002 1410 436
				</view>
			</view>


		</navigator>

		<navigator class="list_dfg pd fz32 btm" url="/pages/bind_account/add_qq">
			QQ号 <text class="z9 fz26">515235416</text>
			<view class="df_right fz26 z9">
				<text class="cz">修改</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</navigator>


		<view class="list_dfg pd fz32  mt20">
			账户信息 <text class="ls fz26">(账户信息任意绑定一个号)</text>
		</view>
		<view class="bgff sd_lh_der pd  pr btm" @click="sd_jhd(sd.url_er)" :class="sd.clsss_s" v-for="sd in user_meat">
			<view class="h_dfg_le cz yj">
				<icon class="dx  cz" :class="sd.icon"></icon>
			</view>
			<text class="ml10 fz30 z6">{{sd.name}}</text>
			<text class="sd_dfth fz26" v-if="sd.jindu">{{sd.jindu}}</text>

			<view class="df_right fz26 z9 ab">
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</view>



	</view>
</template>
<script>
	export default {
		data() {
			return {
				user_meat: [{
					size: "16",
					clsss_s: "ba", //class名字
					jindu: "",
					icon: "icon-taobao", //图标名字
					name: "绑定淘宝账号",
					url_er: "/pages/BindingTaobao/BindingTaobaoList" //跳转地址
				}, {
					size: "16",
					clsss_s: "bb", //class名字
					jindu: "",
					icon: "icon-meilishuo", //图标名字
					name: "绑定美丽账号",
					url_er: "" //跳转地址
				}, {
					size: "16",
					clsss_s: "bc", //class名字
					jindu: "",
					icon: "icon-jingdong", //图标名字
					name: "绑定京东账号",
					url_er: "" //跳转地址
				}, {
					size: "16",
					clsss_s: "bd", //class名字
					jindu: "",
					icon: "icon-mogujie", //图标名字
					name: "绑定蘑菇街账号",
					url_er: "" //跳转地址
				}, {
					size: "16",
					clsss_s: "be", //class名字
					jindu: "",
					icon: "icon-pdd", //图标名字
					name: "绑定拼多多账号",
					url_er: "" //跳转地址
				}]
			}
		},
		components: {},
		methods: {
			sd_jhd(url_e) {
				if (!url_e) {
					uni.showToast({
						title: '功能暂未开放',
						icon: "none",
						duration: 2000
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
<style scoped>
	.df_jh_dewr {
		line-height: 1.5;
	}
</style>
