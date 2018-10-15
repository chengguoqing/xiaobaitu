<template>
	<view>

	
			<view class="pt20 pm20 pd fz30 z3">
				账号信息
			</view>



		<dx_input placeholder='收货人'></dx_input>
		<dx_input type='2' placeholder='收货人手机'></dx_input>

		<view class="dx_select btm pr" @click="xzcheng_dr">
			<text v-if="!pickerText" class="z9">
				请选择省份、市、县级市
			</text>
			<text v-else class="z3">
				{{pickerText}}
			</text>
		</view>
		<view class="pr">
			<dx_input placeholder='详细地址'></dx_input>
		</view>



		<!-- <view class="dx_row">
			<view class="dx_col_8 pd mt20" v-for="sd in img_d">
				<image :src="sd.url" mode="scaleToFill" class="sd_jh_drrt"></image>
				<view class="cen fz28 z9 mt10">
					{{sd.name}}
				</view>

			</view>
		</view> -->
	<view class="pd pm20 mt60">
			
			<view class="mt20 dx_btn cen fz30 bgls">
				提交审核
			</view>
		</view>

		<mpvueCityPicker :showPicker="is_dff" @close_e="is_dff=false" @onConfirm="onConfirm"></mpvueCityPicker>

	</view>
</template>
<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	import {
		config
	} from "../../static/js/config.js"
	export default {
		data() {
			return {
				form: {
					sex: "男"
				},
				is_dff: false,
				pickerText: "",

				

			}
		},
		components: {
			mpvueCityPicker
		},
		methods: {
			onConfirm(e) {
				this.is_dff = false
				uni.hideKeyboard()
				this.pickerText = e
			},
			xzcheng_dr() { //选择城市输入框点击事件
				setTimeout(function() {
					uni.hideKeyboard()
				}, 500)
				this.is_dff = true


			},
		},
		mounted() {},
	}
</script>
<style scoped>

</style>
