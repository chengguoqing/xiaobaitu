<!-- 申诉中心 -->
<template>

	<view class="page_index">
		<view class="sd_fggrd bgff cen bbm" :class="da_lef">
			<view class="thg_sfg fz32" :class="sd.cls" v-for="(sd,idx) in title_d" @click="qiehuan_d(sd,idx)">
				{{sd.name}}
			</view>
			<view class="qc">

			</view> 
		</view>



		<swiper :current="index_d" class="s_kgfg_dr df_jh_drrt" duration="300" @change="bindChange">
			<swiper-item v-for="(sd,idx) in title_d" class="sd_jh_drrt">
				<!-- <scroll-view class="scroll-view_H h100 " scroll-y="true" > -->
				<view class="sdf_dfrtyy h100">
				<view class="bgff bbm pd pt20 pm20" v-for="sd in sd.date_df"> 
					<view class="dx_row df_jh_deet">
						<view class="dx_col_16 fz32 z6">
							订单编号：62907145
						</view>
						<view class="dx_col_8 z9  fz26">
							2018-10-06 11:26:50
						</view>
					</view>
					
					<view class="dx_row mt15">
						<view class="dx_col_20 z9 fz30">
							[类型]文字文字文字文字文字文字文字文
						</view>
						<view class="dx_col_4 z9 tr fz30">
							已完结
						</view>
					</view>
					
				</view>
				</view>
		<!-- 		</scroll-view> -->
				
			</swiper-item>
		</swiper>




	</view>
</template>
<script>
	export default {
		data() {
			return {
				index_d: 0,
				title_d: [{
					name: "我发起的申诉",
					cls: "act",
					page: 1,
					date_df: [{}]
				}, {
					name: "我收到的申诉",
					cls: "",
					page: 1,
					date_df: [{},{}]
				}]
			}
		},
		components: {

		},
		computed: {
			da_lef() {
				let sd_df = ""
				if (this.title_d.length == 3) {
					sd_df = "bca"
				}
				if (this.title_d.length == 4) {
					sd_df = "bcb"
				}
				if (this.title_d.length == 5) {
					sd_df = "bcc"
				}
				return sd_df
			}
		},
		methods: {
			qiehuan_d(sd, idx) {
				this.title_d.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
				this.index_d = idx
			},
			bindChange(e) {
				let index = e.target.current;
				this.index_d = index
				this.title_d.map(a => {
					a.cls = ""
				})
				this.title_d[index].cls = "act"

			}
		},
	onPullDownRefresh() {
		let th = this
		setTimeout(function() {
			let sd_ffg = {}
			sd_ffg.id = Math.floor(Math.random() * 10 + 1)
			th.title_d[th.index_d].date_df.push(sd_ffg)
			th.title_d[th.index_d].date_df.push(sd_ffg)
			uni.stopPullDownRefresh();
		}, 1000);
	},
		mounted() {

		},
	}
</script>

<style scoped>
	.df_jh_deet{
		line-height: 32upx;
	}

	.sdf_dfrtyy{
		overflow: auto;
		padding-bottom: 100upx;
	}
</style>
