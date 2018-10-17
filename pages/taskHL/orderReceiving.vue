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

		<view class="pd pt20 pm20 dx_row ">
			<navigator class="dx_col_18" url="/pages/taskHL/account_binding">
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
			</navigator>
			<view class="dx_col_6 tr pt20">
				<switch :checked="checked" @change="switch1Change" color="#00AB93" />
			</view>
		</view>
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


		<!-- 任务来了提示层 -->
		<view class="sjgh_dfge cz_w" v-if="is_pup">
			<view class="  cz_a ">
				<view class="df_jh_deetxe yj4 bgff tl pt30 pd">
					<view class=" cen">
						<view class="d_hgh_dfg yj4 bgls cz">
							<icon class="dx icon-zhuyi cf fz40 cz"></icon>
						</view>
						<text class="fz34 ls ml10">来任务啦</text>
					</view>

					<view class="btm mt20 z6 pm20">
						<view class="dx_row pt20 pm20 fz26">
							<view class="dx_col_6">
								任务类型
							</view>
							<view class="dx_col_18 tr">
								手机淘宝普通好评
							</view>
						</view>

						<view class="dx_row pt20 pm20 fz26 btm">
							<view class="dx_col_6">
								任务佣金
							</view>
							<view class="dx_col_18 tr">
								7.74金
							</view>
						</view>


						<view class="dx_row pt20 pm20 fz26 btm">
							<view class="dx_col_6">
								时间限制
							</view>
							<view class="dx_col_18 tr">
								2小时
							</view>
						</view>

					</view>




				</view>
			</view>
		</view>

		<view class="jieDanBtn" @click="is_jiedan=true;jishi()">
			<view class="cen fz28 z9 dsf_deertx" v-if="is_jiedan">
				{{jishi_d}}
			</view>
			接 单
			<image src="../../static/img/huangs_as.png" class="huangs_as" v-if="is_jiedan"></image>

		</view>

		<view class="sdf_jgh_sdf yj  cf fz34" v-if="is_jiedan" @click="tingzhi()">
			<text>停 止</text>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				checked: true,
				jishi_d: "",
				is_jiedan: false, //是否开始接单
				is_pup: false, //是否显示任务来了弹出层
				dingshi: "", //接单定时器
				user_meat: [{
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
			jishi() { //开始接单
				let sd_sd_a = 0,
					sd_sd_b = 0,
					sd_sd_c = 0
				this.jishi_d = (sd_sd_a < 10 ? '0' + sd_sd_a : sd_sd_a) + ':' + (sd_sd_b < 10 ? '0' + sd_sd_b : sd_sd_b) + ':' + (
					sd_sd_c < 10 ?
					'0' + sd_sd_c : sd_sd_c)
				this.dingshi = setInterval(a => {

					if (sd_sd_c > 5) {
						this.is_pup = true
						this.tingzhi()
						var p = plus.audio.createPlayer("http://file.52lishi.com/file/yinxiao/f-18-10-17-12.mp3");
						p.play();
						
						setTimeout(b=>{
							this.is_pup=false
							uni.navigateTo({
								url:"/pages/taskHL/operatingDuty"
							})
						},5000)
					}
					if (sd_sd_c++ > 59) {
						sd_sd_c = 0

						if (sd_sd_b++ > 59) {
							sd_sd_b = 0
							sd_sd_a++
						}
					}
					this.jishi_d = (sd_sd_a < 10 ? '0' + sd_sd_a : sd_sd_a) + ':' + (sd_sd_b < 10 ? '0' + sd_sd_b : sd_sd_b) + ':' +
						(sd_sd_c < 10 ?
							'0' + sd_sd_c : sd_sd_c)
				}, 1000)
			},
			tingzhi() { //停止接单按钮触发
				this.is_jiedan = false
				clearTimeout(this.dingshi)
			}
		},
		mounted() {




		},
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

	.h_dfg_le.ab {
		background: #949494;
	}

	.h_dfg_le icon {
		font-size: 60upx;
		top: 0px;
	}

	.dfg_cfrtt {
		background: #E5F1ED;
	}

	.df_ccrf_rt {
		background: #F5F7F6;
	}

	.df_right {
		top: 40upx;
	}

	.jieDanBtn {
		bottom: 80upx;
	}

	.huangs_as {
		width: 190upx;
		height: 190upx;
		position: absolute;
		left: -15upx;
		top: -15upx;
		-webkit-animation: rotation 1s linear infinite;
		animation: rotation 1s linear infinite;
	}

	.sdf_jgh_sdf {
		width: 100upx;
		height: 100upx;
		position: fixed;
		right: 20upx;
		text-align: center;
		line-height: 100upx;
		bottom: 80upx;
		background: #2ABE9C;
	}

	.dsf_deertx {
		position: absolute;
		left: 0;
		top: -120upx;
		width: 100%;
		text-align: center;
	}

	.sjgh_dfge {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: rgba(0, 0, 0, 0.5);
	}

	.df_jh_deetxe {
		min-height: 200upx;
		min-width: 500upx;
		display: inline-block;
	}

	.d_hgh_dfg {
		width: 60upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		display: inline-block;
	}


	@-webkit-keyframes rotation {
		from {
			-webkit-transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(360deg);
		}
	}
</style>
