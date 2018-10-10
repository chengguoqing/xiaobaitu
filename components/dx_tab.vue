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
		<view class="df_dertxr">
			<slot></slot>

		</view>
	</view>
</template>
<script>
	export default {
		props: {
			title_d: ""
		},
		data() {
			return {
				index_d: 0,
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
			shang_back() {
				this.title_d[this.index_d].date_df.push({
					id: 6
				})
			}
		},

		onPullDownRefresh() {
			let th = this
			setTimeout(function() {
				uni.stopPullDownRefresh();
				th.shang_back()

			}, 1000);
		},
		mounted() {

		},
	}
</script>

<style scoped>
	.df_dertxr {
		padding-top: 80upx;
	}
</style>
