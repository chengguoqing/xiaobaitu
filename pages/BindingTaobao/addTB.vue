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
		
			<navigator class="dx_btn fz30 bghs cen" url="/pages/BindingTaobao/BindingRequirements">
				进入查看绑定要求
			</navigator>
			
			<view class="pt20 pm20 pd fz30 z3">
				账号信息
			</view>
		</view>

		<dx_input placeholder='请输入账号'></dx_input>
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

		<view class="picker fz30 dx_select btm" @click="isze_e=true">
			<text class="z9" v-if="fenlei_e.length<=0">请选择分类</text>
			<text v-else>{{fenlei_e}}</text>
		</view>

		<view class="" v-if="isze_e">


			<view class="fz28 z9 pd pt20 pm20 ln">
				请任意选择<text class="red">三</text>个淘宝号经常购买的商品类目,提交后不可以自
				行修改,如需要修改请联系人工客服处理;只有选择了购买类
				目的买手才能接受相关要求的任务
			</view>

			<view class="pl20 dx_row pt5">
				<view class="dx_col_8 pr20 mb20 pm5" v-for="sd in fenlei">
					<view class="cjg_eyd fz28" :class="sd.cls" @tap="sd_dffsd(sd)">
						{{sd.name}}
					</view>
				</view>
			</view>

		</view>


		<view class="pd">
			<view class="pt20  pd fz30 z3">
				图片示例(<text class="red">点击可放大</text>)
			</view>

		</view>

		<view class="dx_row">
			<view class="dx_col_8 pd mt20" v-for="sd in img_d">
				<image :src="sd.url" mode="scaleToFill" class="sd_jh_drrt" @click="lltup(sd.url)"></image>
				<view class="cen fz28 z9 mt10">
					{{sd.name}}
				</view>

			</view>
		</view>
		<view class="pd pm20">
			<view class='dx_btn  cen cf fz32 yj4 bghs cf fz30 mt40' @click="yijiansc">
				一键上传图片
			</view>
			
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
				array: [{
					name: 0
				}],
				is_dff: false,
				index: "",
				form: {
					sex: "男",
				},
				fenlei_e: [],
				is_pup: false, //是否显示选择城市下拉框
				pickerText: "",
				isze_e: false, //分类折叠
				fenlei: "",
				tempFilePaths:"",
				img_d: [{
					url: "../../static/img/fengmian_a.png",
					name: "信誉等级"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "花呗"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "实名认证"
				}, {
					url: "../../static/img/fengmian_a.png",
					name: "淘气值截图"
				}]
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
			bindPickerChange(e) {
				this.index = e.mp.detail.value
				console.log(JSON.stringify(e))
			},
			sd_dffsd(sd) { //分类列表点击
				let sd_drt = 0
				this.fenlei.map(a => {
					if (a.cls) {
						sd_drt++
					}
				})
				if (sd_drt < 3) {
					sd.cls ? sd.cls = "" : sd.cls = 'act',
						this.fenlei_e = []
					this.fenlei.map(a => {
						if (a.cls) {
							this.fenlei_e.push(a.name)
						}
					})
					this.fenlei_e = this.fenlei_e.join("/")
				} else {
					if (!sd.cls) {
						uni.showToast({
							icon: "none",
							title: "已选择3个了请取消一个",
						})
						this.isze_e = false
					}
					sd.cls = ""


				}

			},
			xzcheng_dr() { //选择城市输入框点击事件
				setTimeout(function(){
					uni.hideKeyboard()
				},500)

				this.is_dff = true

			},
			yijiansc() { //一键上传按钮触发
				let th = this
				uni.chooseImage({
					count: 4, //默认9
					sourceType: ['album'], //从相册选择
					success: function(res) {
						th.tempFilePaths=res.tempFilePaths
						res.tempFilePaths.map((a, b) => {
							th.img_d[b].url = a
						})
					}
				});
			},
			lltup(current) {
				let th = this

				uni.previewImage({
					current:current,
					urls: th.tempFilePaths
				});
			}
		},
		mounted() {
			this.array = config.taobaoGrade_json
			this.fenlei = config.showCategory_json
		},
	}
</script>

