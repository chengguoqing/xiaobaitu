<!-- 申诉中心 -->
<template>

	<view class="page_index">
		<view class="sd_fggrd bgff cen bbm" :class="da_lef">
			<view class="thg_sfg fz30" :class="sd.cls" v-for="(sd,idx) in title_d" @click="qiehuan_d(sd,idx)">
				{{sd.name}}
			</view>
			<view class="qc">

			</view>
		</view>
		<!-- " -->
		<scroll-view class="scroll-view_H d_hg_derrty" @touchend="likai_de" @touchstart="is_sd_df=false" scroll-y="true"
		 @scroll="scroll" :scroll-top="scrollTop" @scrolltoupper="up_dr_drrt" upper-threshold="50">
			<view class="sdf_dfrtyy_e cen fz32">
				<view class="cen fz32 f_b z6 pr df_df_drt">
					<image src="../../static/img/down.png" class="down_icon" :class="is_usod==2?'act':''" v-if="is_usod!=3"></image>
					<image src="../../static/img/load.gif" class="down_icon" v-else></image>
					<text v-if="is_usod==1">
						下拉可以刷新
					</text>
					<text v-if="is_usod==2">
						松开立即刷新
					</text>
					<text v-if="is_usod==3">
						正在刷新
					</text>
				</view>
				<view class="fz26 z9 cen mt10">
					最后更新时间:10-09 23:33
				</view>
			</view>
			<view class="bgff bbm pd pt15 pm10" v-for="(sd,idx_e) in 20">
				<view class="dx_row df_jh_deet">
					<view class="dx_col_15 fz32 z6">
						订单编号：62907145
					</view>
					<view class="dx_col_9 z9  fz26">
						2018-10-06 11:26:50
					</view>
				</view>
				<view class="dx_row mt5">
					<view class="dx_col_20 z9 fz26">
						[类型]文字文字文字文字文字文字文字文
					</view>
					<view class="dx_col_4 z9 tr fz26 mt10">
						已完结
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		props: {
			dats_d: ""
		},
		data() {
			return {
				index_d: 0,
				scrollTop: 62,
				scrollTop_g: 0,
				is_usod: 1,
				is_sd_df: false,
				platform: "", //客户平台

				title_d: [{
					name: "我发起的申诉",
					cls: "act",
					page: 1,
					date_df: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
				}, {
					name: "我收到的申诉",
					cls: "",
					page: 1,
					date_df: [{}, {}]
				}],

			}
		},
		components: {

		},
		computed: {

		},
		methods: {
			likai_de() {
				if (this.platform != "android") {
					this.is_sd_df = true
					if (this.scrollTop_g < 62 && this.scrollTop_g > 0 && this.is_sd_df) {
						this.scrollTop == 62 ? this.scrollTop = 62.1 : this.scrollTop = 62
					}
				} else {

				}
			},
			scroll: function(e) {

				if (this.platform != "android") {
					setTimeout(a => {
						this.scrollTop_g = e.mp.detail.scrollTop
					}, 500)
					if (!this.is_sd_df) {
						if (this.scrollTop_g <= 0) {
							this.is_usod = 2
						} else {
							this.is_usod = 1
						}
					} else {
						this.is_usod = 3
					}
				}

			},
			up_back() { //下啦刷新的回调
				setTimeout(a => {
					this.scrollTop == 62 ? this.scrollTop = 62.1 : this.scrollTop = 62
					this.is_usod = 1
				}, 1000)
			},
			up_dr_drrt() {
				if (this.platform == "android") {
					this.is_usod = 3
					this.up_back()
				}
			}
		},

		onPullDownRefresh() {

		},
		watch: {
			scrollTop_g: {
				handler: function() {
					if (this.scrollTop_g == 0 && this.is_sd_df && this.is_usod == 3) {
						this.is_sd_df = false
						this.up_back()
					}
				},
				deep: true
			}
		},
		mounted() {
			let th = this
			uni.getSystemInfo({
				success: function(res) {
					th.platform = res.platform
					console.log(th.platform)
				},
			})
		},
	}
</script>

<style scoped>
	.d_hg_derrty {
		position: fixed;
		left: 0;
		top: 0px;
		width: 100%;
		height: 100%;
	}

	.down_icon {
		width: 60upx;
		height: 60upx;
		position: absolute;
		left: -120upx;
		top: 10upx;
	}

	.df_df_drt {
		width: 200upx;
	}

	.down_icon.act {
		transform: rotate(180deg);
	}
</style>
