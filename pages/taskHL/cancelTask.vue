<!-- 取消任务 -->
<template>
	<view>

		<view class="mt40 cen pd">
			<image src="../../static/img/xiangku.png" class="xiangku"></image>
			<view class="fz30 mt15">
				本次取消有责，任务取消将扣除相应<text class="red">完成率</text>
			</view>
			<view class="fz28 ye pd pt15 pm15 df_drt_rt tl mt20">
				接任务后15分钟内取消任务不影响完成率，超过15分钟取消任务将扣除相应任务完成率，请慎重取消哦~
			</view>
		</view>

		<view class="mt20">
			<view class="pd fz28 z9 pt20 pm20">请选择取消理由</view>

			<view class="dx_row pd pt20 pm20 btm" @click="xsdff(sd)" v-for="sd in cancelOrderReason">
				<view class="dx_col_20 fz30 z6">
					{{sd.name}}
				</view>
				<view class="dx_col_4 tr">
					<view class="yj  df_jh_deertcc " :class="sd.cls">

					</view>
				</view>
			</view>

		</view>


		<view class="mt40 pd pm100">
			<view class="yj4 dx_btn fz32 bgls cen">
				取消并派给其他用户
			</view>

			<navigator url="/pages/taskHL/CancelRules" class="cen mt20 fz28 ln z9">
				<icon class="dx icon-order fz40 z9 "></icon>
				<text class="ml5">取消规则</text>
			</navigator>
		</view>
	</view>
</template>
<script>
	import {
		config
	} from "../../static/js/config.js"
	export default {
		data() {
			return {
				cancelOrderReason: ""
			}
		},
		components: {},
		methods: {
			xsdff(sd) {
				this.cancelOrderReason.map(a => {
					a.cls = ""
				})
				sd.cls = "act"
			}
		},
		mounted() {
			this.cancelOrderReason = config.cancelOrderReason
		},
	}
</script>
<style scoped>
	.xiangku {
		width: 196upx;
		height: 196upx;
	}

	.df_drt_rt {
		border: 1px dashed #e0e0e0;
	}

	.df_jh_deertcc {
		width: 45upx;
		height: 45upx;
		margin-top: 6upx;
		display: inline-block;
		border: 1px solid #C2C2C2;
		position: relative;
	}

	.df_jh_deertcc.act:after {
		content: ' ';
		background: #4DA994;
		width: 26upx;
		height: 26upx;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		margin: auto;
	}
</style>
