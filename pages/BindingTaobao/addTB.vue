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
		<picker @change="bindPickerChange" :range="array" range-key="name">
			<view class="picker fz30 dx_select btm">
				<text v-if="index">
					{{array[index].name}}

				</text>
				<text v-else class="z9">
					请选择等级
				</text>

			</view>
		</picker>

		<view class="picker fz30 dx_select btm">
			<text class="z9">请选择分类</text>
		</view>

		<view class="fz28 z9 pd pt20 pm20 ln">
			请任意选择<text class="red">三</text>个淘宝号经常购买的商品类目,提交后不可以自
			行修改,如需要修改请联系人工客服处理;只有选择了购买类
			目的买手才能接受相关要求的任务
		</view>
		
		<view class="pl20 dx_row pt5">
			<view class="dx_col_8 pr20 mb20 pm5"  v-for="sd in fenlei">
				<view class="cjg_eyd fz28" :class="sd.cls" @click="sd_dffsd(sd)">
					{{sd.name}}
				</view>
			</view>
		</view>
		



		<mpvueCityPicker ref="mpvueCityPicker" @onConfirm="onConfirm"></mpvueCityPicker>

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
				array: [{
					name: 0
				}],
				index: "",
				form: {
					sex: "男",

				},
				is_pup: false, //是否显示选择城市下拉框
				pickerText: "",
				fenlei:""
			}
		},
		components: {
			mpvueCityPicker
		},
		methods: {
			onConfirm(e) {
				this.pickerText = e
			},
			bindPickerChange(e) {
				this.index = e.mp.detail.value
				console.log(JSON.stringify(e))
			},
			sd_dffsd(sd){//分类列表点击
				this.fenlei.map(a=>{
					a.cls=""
				})
				sd.cls="act"
			}
		},
		mounted() {
			this.array = config.taobaoGrade_json
			this.fenlei=config.showCategory_json
		},
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
	.cjg_eyd{
		line-height: 70upx;
		text-align: center;
		border: 1px solid #e0e0e0;
		
	}
	.cjg_eyd.act{
		border: 1px solid #4DA994;
		color: #4DA994;
	}
</style>
