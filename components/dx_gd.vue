<template>
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
		
		<view class="df_jh_deertt">
			<slot></slot>
		</view>
		
		
	
		
		
	</scroll-view>
</template>
<script>
	export default {
		props:{
			sd:""
		},
		data() {
			return {
				scrollTop: 62,
				scrollTop_g: 0,
				is_usod: 1,
				is_sd_df: false,
				platform: "", //客户平台
			}
		},
		components: {},
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
					this.$emit("huitiao")
				}, 1000)
			},
			up_dr_drrt() {
				if (this.platform == "android") {
					this.is_usod = 3
					this.up_back()
				}
			}
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
	.df_jh_deertt{
		min-height: 1080upx;
	}
</style>
