<template>
	<view>
		<view class="pd">
			<view class="zhuyi_dsd pd mt20 b">
				注意事项
			</view>
			<view class="fz28 z6 ln pt20 pm20 pd">
				账号审核时间周一至周五账号提交后3个工作日内完成审
				核,如遇周末或节假日顺延审核工作人工进行,买手请耐
				心等,新手务必看下方的审核要求!
			</view>

			<navigator class="dx_btn fz30 bghs cen" url="/pages/BindingTaobao/BindingRequirements">
				进入查看绑定要求
			</navigator>
			<view class="pt20 pm20 pd fz30 z3 mt20">
				账号信息
				<navigator url="/pages/BindingTaobao/BindingTaobaoXq" class="bgls yj4 dfsdfg fz30">
					更改收货信息
				</navigator>
			</view>
		</view>
		<view class="bgff fz30 mt20 pd mt10">


			<view class=" dx_btn z6 pd btm">
				这么恶心麻烦
			</view>
			<view class=" dx_btn z6 pd btm">
				程顺伟
			</view>
			<view class=" dx_btn z6 pd btm">
				15896798798
			</view>
			<view class=" dx_btn z6 pd btm">
				广东-广州-海珠区
			</view>
			<view class=" dx_btn z6 pd btm">
				详细地址详细地址详细地址详细地址
			</view>

		</view>

		<view class="pd">
			<view class="pt20 pm20 pd fz30 z3">
				帐号属性(<text class="red">与实名认证的身份证信息一致</text>)
			</view>
		</view>

		<view class="bgff fz30 mt20 pd mt10">
			<view class=" dx_btn z6 pd btm">
				男
			</view>
			<view class=" dx_btn z6 pd btm">
				32
			</view>
			<view class=" dx_btn z6 pd btm">
				服装服装/服装/服装
			</view>
			<view class=" dx_btn z6 pd btm">
				花呗 <text class="fr ls fz28">审核通过</text>
			</view>
		</view>



		<view class="dx_row">
			<view class="dx_col_8 pd mt20" v-for="sd in img_d">
				<image :src="sd.url" mode="scaleToFill" class="sd_jh_drrt"></image>
				<view class="cen fz28 z9 mt10">
					{{sd.name}}
				</view>

			</view>
		</view>

		<view class="pd fz30 mt40 z3">
			可接单数：
		</view>

		<view class="mt20 cen">


			<view class="dx_row bgff fz30">
				<view class="dx_col_9 pd pt20 pm20">
					类别
				</view>

				<view class="dx_col_5 pd pt20 pm20">
					今日
				</view>
				<view class="dx_col_5 pd pt20 pm20">
					本周
				</view>
				<view class="dx_col_5 pd pt20 pm20">
					本月
				</view>
			</view>
			
			<view class="dx_row bgff fz30 btm" v-for="sd in 20">
							<view class="dx_col_9 pd pt20 pm20">
								淘宝垫付单
							</view>
			
							<view class="dx_col_5 pd pt20 pm20">
								3
							</view>
							<view class="dx_col_5 pd pt20 pm20">
								18
							</view>
							<view class="dx_col_5 pd pt20 pm20">
								78
							</view>
						</view>
						
						
						

		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				img_d: [{
					url: "../../static/img/fengmian_a.png",
					name: "信誉等级"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "花呗"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "实名认证"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "淘气值截图"
				}]
			}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.dfsdfg {
		float: right;
		width: 260upx;
		text-align: center;
		position: relative;
		top: -20upx;
		line-height: 60upx;
	}
</style>
