
<template>
	<view>
		<view class="pd bgff pt20 pm20 ln pr">
			<text class="fz32 z3">ID:176297 |0</text>
			<text class="fz26"> 完成率：50%</text>
			<navigator class="dx icon-feedback fr fz50  z9 df_jh_dertx" url="/pages/user_center/percentageComplete"></navigator>
			<view class="fz26 z6">
				设置好每个平台的模式，可以自由组合多个平台同时接单哦！
			</view>
		</view>

		<navigator class="pd pt20 pm20 dx_row " url="/pages/taskHL/account_binding">
			<view class="dx_col_18">
				<view class="h_dfg_le cz yj fl">
					<icon class="dx  cz icon-taobao"></icon>
				</view>
				<view class="ov pl20 ln">
					<view class="fz32 z6 mt10">
						这么恶心麻烦
					</view>
					<view class="fz26 z9">
						今日已接垫付0/3单 浏览0/100单
					</view>
				</view>
				<view class="qc">

				</view>

			</view>
			<view class="dx_col_6 tr pt20">
				<switch :checked="checked" @change="switch1Change" color="#00AB93" />
			</view>
		</navigator>
		<view class="pt10 pm10 pd fz26 dfg_cfrtt">
			淘宝任务模式：全部/淘宝/任务
		</view>

		<view class="df_ccrf_rt">
			<view class="btm pt20 pm20 pd pr" v-for="sd in user_meat">
				<view class="h_dfg_le cz yj fl ab">
					<icon class="dx  cz" :class="sd.icon"></icon>
				</view>
				<view class="ov pl20 ln">
					<view class="fz34 z6 mt20">
						{{sd.name}}
					</view>
					
				</view>
				<view class="df_right fz26 z9 ab">
					<icon class="dx icon-right1 cz fz30 ml10"></icon>
				</view>
				<view class="qc">

				</view>
			</view>
		</view>
<navigator url="" class="jieDanBtn">接 单</navigator>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				checked: true,
				user_meat: [ {
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
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.df_jh_dertx {
		position: absolute;
		right: 20upx;
		top: 0upx;
	}

	.h_dfg_le {
		width: 90upx;
		height: 90upx;
		text-align: center;
		line-height: 90upx;
		background: #FF4500;
	}
	.h_dfg_le.ab{
		background: #949494;
	}

	.h_dfg_le icon {
		font-size: 60upx;
		top: 0px;
	}

	.dfg_cfrtt {
		background: #E5F1ED;
	}
	.df_ccrf_rt{
		background: #F5F7F6;
	}
	.df_right{
		top: 40upx;
	}
</style>
