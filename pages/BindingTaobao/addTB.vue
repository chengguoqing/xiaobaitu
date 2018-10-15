<!-- 添加淘宝账号 -->
<template>
	<view>
		<view class="pd">
			<view class="zhuyi_dsd pd mt20 b">
				注意事项
			</view>

			<view class="fz28 z6 ln pt20 pm20 pd">
				账号审核时间周一至周五账号提交后3个工作日内完成审
				核,如遇周末或节假日顺延审核工作人工进行,买手请耐
				心等,新手务必看下方的审核要求!
			</view>
			<view class="dx_btn fz30 bghs cen">
				进入查看绑定要求
			</view>
			<view class="pt20 pm20 pd fz30 z3">
				账号信息
			</view>
		</view>

		<dx_input placeholder='请输入账号'></dx_input>
		<dx_input placeholder='收货人'></dx_input>
		<dx_input type='2' placeholder='收货人手机'></dx_input>

		<view class="dx_select btm" @click="$refs.mpvueCityPicker.show()">

			<text v-if="!pickerText" class="z9">
				请选择省份、市、县级市
			</text>
			<text v-else class="z3">
				{{pickerText}}
			</text>


		</view>

		<dx_input placeholder='详细地址'></dx_input>

		<view class="pd">
			<view class="pt20 pm20 pd fz30 z3">
				帐号属性(<text class="red">与实名认证的身份证信息一致</text>)
			</view>



		</view>
		<dx_input placeholder='请输入性别' value="男"></dx_input>
		<dx_input placeholder='请输入年龄' value="32"></dx_input>
		<view class="dx_select btm">

			<text v-if="!pickerText" class="z9">
				等级请选择
			</text>
			<text v-else class="z3">
				{{pickerText}}
			</text>


		</view>


		<picker bindchange="bindPickerChange" value="{{index}}" range="{{array}}">
			<view class="picker">
				当前选择：{{array[index]}}
			</view>
		</picker>




		<mpvueCityPicker ref="mpvueCityPicker" @onConfirm="onConfirm"></mpvueCityPicker>

	</view>
</template>
<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'

	export default {
		data() {
			return {

				form: {
					sex: "男",

				},
				is_pup: false, //是否显示选择城市下拉框
				pickerText: ""
			}
		},
		components: {
			mpvueCityPicker
		},
		methods: {
			onConfirm(e) {
				this.pickerText = e
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.zhuyi_dsd {
		line-height: 80upx;
		font-size: 30upx;
		background: #DFDFDF;
	}

	.dx_select {
		height: 80upx;
		line-height: 80upx;
		background: #fff;
		text-indent: 0px;
		padding-left: 20upx !important;
		font-size: 30upx;
	}
</style>
