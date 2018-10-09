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
			<swiper-item v-for="(sd,idx) in title_d">
				<dx_list :title='sd.id' v-for="(sd,inx_er) in sd.date_df"></dx_list>
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
		computed : {
			da_lef(){
				let sd_df=""
				if(this.title_d.length==3){
					sd_df="bca"
				}
				if(this.title_d.length==4){
					sd_df="bcb"
				}
				if(this.title_d.length==5){
					sd_df="bcc"
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
	.df_jh_drrt {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
	}

	.sd_fggrd {
		position: fixed;
		z-index: 1000;
		top: 0;
		width: 100%;
		left: 0;
		z-index: 100;
	}

	.thg_sfg {
		width: 50%;
		float: left;
		line-height: 80upx;
	}
	.sd_fggrd.bca .thg_sfg{
		width: 33.3%;
	}
	.sd_fggrd.bcb .thg_sfg{
		width: 25%;
	}
	.sd_fggrd.bcc .thg_sfg{
		width: 20%;
	}
	
	.thg_sfg.act {
		color: #4DA994;
		border-bottom: 2px solid #4DA994;
	}

	.s_kgfg_dr {
		padding-top: 80upx;
	}
</style>
