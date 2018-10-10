<template>
	<view class=" pm20">
		<view class="z9 pt30 pm20 fz26 z9 cen">
			第{{dangqqi_idx}}题，共{{timu_s.length}}题
		</view>

		<view class="pl30 pr30 ">
			<view class="fz32 z3 pm20">
				{{dangqqi_idx}}.{{dangqqi.title}}
			</view>

			<view class="pt20 pm20 z9 fz28" v-for="sd in dangqqi.xuanxiang" @click="tiMuXx_cli(sd)">
				<view class="df_dffrf yj cz" :class="sd.cls"></view>
				<text class="ml5 cz">{{sd.name}}</text>


			</view>
		</view>

		<view class="mt20" v-if="dangqqi_idx==1" @click="nex_ddf(1)">
			<view class="dx_btn cen ls bgff">下一题</view>
		</view>

		<view class="mt20 dx_row" v-if="dangqqi_idx>1&&dangqqi_idx<timu_s.length">
			<view class="dx_col_12">
				<view class="dx_btn cen ls bgff" @click="nex_ddf(2)">上一题</view>
			</view>
			<view class="dx_col_12">
				<view class="dx_btn cen ls bgff" @click="nex_ddf(1)">下一题</view>
			</view>
		</view>
		<view class="mt20 dx_row" v-if="dangqqi_idx==timu_s.length">
			<view class="dx_col_12">
				<view class="dx_btn cen ls bgff" @click="nex_ddf(2)">上一题</view>
			</view>
			<view class="dx_col_12">
				<view class="dx_btn cen ls bgff" @click="tijiao">提交</view>
			</view>
		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				dangqqi_idx: 1, //当前步骤
				dangqqi: "", //当前选中的题目
				timu_s: [{
					title: "蜜桃吧官方QQ1群号码是_____,在公告里就可以看到。",
					xuanxiang: [{
						id: 0,
						cls: "",
						name: "758921704"
					}, {
						id: 1,
						cls: "",
						name: "758921706"
					}, {
						id: 2,
						cls: "",
						name: "758921762"
					}]
				}, {
					title: "蜜桃吧官方QQ2群号码是_____,在公告里就可以看到。",
					xuanxiang: [{
						id: 0,
						cls: "",
						name: "758921704"
					}, {
						id: 1,
						cls: "",
						name: "758921706"
					}, {
						id: 2,
						cls: "",
						name: "758921762"
					}]
				}, {
					title: "蜜桃吧官方QQ3群号码是_____,在公告里就可以看到。",
					xuanxiang: [{
						id: 0,
						cls: "",
						name: "758921704"
					}, {
						id: 1,
						cls: "",
						name: "758921706"
					}, {
						id: 2,
						cls: "",
						name: "758921762"
					}]
				}, {
					title: "蜜桃吧官方QQ4群号码是_____,在公告里就可以看到。",
					xuanxiang: [{
						id: 0,
						cls: "",
						name: "758921704"
					}, {
						id: 1,
						cls: "",
						name: "758921706"
					}, {
						id: 2,
						cls: "",
						name: "758921762"
					}]
				}]
			}
		},

		components: {},
		methods: {
			tiMuXx_cli(sd) { //题目选项点击事件
				this.dangqqi.xuanxiang.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
			},
			nex_ddf(ty) { //上一题  下一题 和提交按钮触发 

				ty == 1 ? this.dangqqi_idx++ : this.dangqqi_idx--
				this.dangqqi = this.timu_s[this.dangqqi_idx - 1]
			},
			tijiao() { //提交按钮触发
				uni.redirectTo({
					url: '/pages/examination/result'
				});
			}
		},
		mounted() {
			this.dangqqi = this.timu_s[0]
		},
	}
</script>
<style scoped>
	.df_dffrf {
		display: inline-block;
		width: 40upx;
		height: 40upx;
		border: 1px solid #e0e0e0;
		position: relative;
	}

	.df_dffrf.act::after {
		content: ' ';
		position: absolute;
		width: 25upx;
		height: 25upx;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		border-radius: 50%;
		background: #63BD96;
	}
</style>
