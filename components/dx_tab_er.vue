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
		<swiper :current="index_d" class=" df_jh_drrt" duration="300" @change="bindChange">
			<swiper-item v-for="sd in title_d" >
				<slot></slot>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	export default {
		props:{
			title_d:""
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

		},
		mounted() {

		},
	}
</script>

<style scoped>

</style>
