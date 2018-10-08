<!-- 账号绑定 -->
<template>
	<view>
		<view class="list_dfg pd fz32">
			账户信息 <text class="ls fz26">(账户信息必填,银行卡信息与身份证一致)</text>
		</view>
		<view class="list_dfg pd fz32 btm">
			身份证信息 <text class="red">必填</text> 
			<view class="df_right fz26 z9">
				<text class="cz">新增加</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</view>
		<view class="list_dfg pd fz32 btm">
			银行卡
			<view class="df_right fz26 z9">
				<text class="cz">新增加</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</view>
		
		<view class="list_dfg pd fz32 btm">
			QQ号
			<view class="df_right fz26 z9">
				<text class="cz">新增加</text>
				<icon class="dx icon-right1 cz fz30 ml10"></icon>
			</view>
		</view>
		
		
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
						url_er: "" //跳转地址
					},{
						size: "16",
						clsss_s: "bb", //class名字
						jindu: "",
						icon: "icon-meilishuo", //图标名字
						name: "绑定美丽账号",
						url_er: "" //跳转地址
					},{
						size: "16",
						clsss_s: "bc", //class名字
						jindu: "",
						icon: "icon-jingdong", //图标名字
						name: "绑定京东账号",
						url_er: "" //跳转地址
					},{
						size: "16",
						clsss_s: "bd", //class名字
						jindu: "",
						icon: "icon-mogujie", //图标名字
						name: "绑定蘑菇街账号",
						url_er: "" //跳转地址
					},{
						size: "16",
						clsss_s: "be", //class名字
						jindu: "",
						icon: "icon-pdd", //图标名字
						name: "绑定拼多多账号",
						url_er: "" //跳转地址
					}
					]
			}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	
</style>
