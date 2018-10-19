<template>
	<view>

		<view class="fz30 z3 pd pt20 pm20">
			接单账号选择(必选)
		</view>

		<picker class="pd bgff pt20 pm20" @change="bindPickerChange" :range="array" range-key="name">
			<view class="h_dfg_le cz yj ">
				<icon class="dx  cz icon-taobao"></icon>
			</view>
			<text class="ml10">{{array[index].name}}</text>
			<i class="dx icon-down ls fr mt15"></i>
		</picker>

		<view v-for="(sd,ix) in xsd_eer">
			<view class="pd pt10 pm10 z3">
				{{sd.title}}
			</view>
			<view class="dx_row bgff pd pt10 pm10">
				<view class="dx_col_8" v-for="(sf,idx) in sd.dete_s">
					<text class="sd_jh_dertse " :class="sf.cls" @click="xs_eer(sd,sf)">
						{{sf.name}}
					</text>
				</view>
			</view>

		</view>




<view class="pd sdf_jh_baoc">
	<view class="dx_btn ls bgff fz30 cen br yj4">
		保存
	</view>
</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				index: 0,
				array: [{
					name: "这么恶心麻烦"
				}, {
					name: "昵称2"
				}, {
					name: "昵称3"
				}],
				xsd_eer: [{
					title: "选择操作设备",
					dete_s: [{
						cls: "",
						id: "",
						name: "全部"
					}, {
						cls: "",
						id: "",
						name: "手机"
					}, {
						cls: "",
						id: "",
						name: "电脑"
					}]
				}, {
					title: "任务平台",
					dete_s: [{
						cls: "act",
						id: "",
						name: "淘宝"
					}]
				}, {
					title: "选择任务类型",
					dete_s: [{
						cls: "",
						id: "",
						name: "全部"
					}, {
						cls: "",
						id: "",
						name: "垫付任务"
					}, {
						cls: "",
						id: "",
						name: "浏览任务"
					}]
				}, {
					title: "选择返款方式",
					dete_s: [{
						cls: "act",
						id: "",
						name: "平台返款"
					}]
				}]
			}
		},
		components: {},
		methods: {
			xs_eer: function(sd, sf) {

				sd.dete_s.map(function(a) {
					a.cls = ""
				})
				sf.cls = "act"

				localStorage.sd_eert = JSON.stringify(this.xsd_eer)
			},
			bindPickerChange(e) {
				this.index = e.mp.detail.value
				console.log(JSON.stringify(e))
			},
		},
		mounted() {},
	}
</script>
<style scoped>
	.h_dfg_le {
		background: #FF4500;
	}


	.sd_jh_dertse {
		display: block;
		width: 100px;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		font-size: 30upx;
		border-radius: 4px;
		border: 1px solid #fff
	}

	.sd_jh_dertse.act {
		border: 1px solid #00AC92;
		color: #00AC92;
	}
	.sdf_jh_baoc{
		position: fixed;
		left: 0;
		bottom: 40upx;
		width: 100%;
		
	}
</style>
