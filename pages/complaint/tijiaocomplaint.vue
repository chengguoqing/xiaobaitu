<!-- 提交申述 -->

<template>
	<view>
		<view class="pd pt30 pm30 z6 fz30">
			第一步，选择申述类型
		</view>

		<picker class="picker-item dx_btn bgff cen fz30 pr" mode="selector" :range="textList" range-key="name" @change="textChange">
			{{textValue||'请选择申述原因'}}
			<icon class="dx icon-down doh_deert"></icon>
		</picker>




		<view class="pd pt30 pm30 z6 fz30">
			请填写申述说明并添加图片
		</view>
		<textarea placeholder="申述说明...." class="sheng_rtde "></textarea>


		<view class="dx_row mt20">
			<view class="dx_col_8 pd mt20" v-for="(sd,idx) in tu_pdf">
				<view class="pr">
					<image :src="sd" mode="scaleToFill" class="sd_jh_drrt" @click="lltup(sd)"></image>
					<icon class="dx icon-delete_fill fz60 dsf_colise z9" @click="djgdf(idx)"></icon>
				</view>
			</view>
		</view>



		<view class="dx_btn bgff cen fz30 pr mt40" @click="xztu">

			上传图片
		</view>


		<view class="dx_btn bgff cen fz30 pr mt40">

			提交申述
		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				textList: [{
					name: "原因1"
				}, {
					name: "原因2"
				}, {
					name: "原因3"
				}, {
					name: "原因4"
				}],
				tu_pdf: [],
				textValue: ""
			}
		},
		components: {},
		methods: {
			textChange(evt) {
				this.textValue = this.textList[evt.detail.value].name;
			},
			xztu() { //上传图片按钮触发
				let th = this
				uni.chooseImage({
					success: function(res) {
						res.tempFilePaths.map(a => {
							th.tu_pdf.push(a)
						})
					}
				});
			},
			djgdf(idx) { //图片上的叉按钮触发
				this.tu_pdf.splice(idx, 1)
			},
			lltup(url) {

				// 预览图片
				let th=this
				uni.previewImage({
					current:url,
					urls: th.tu_pdf
				});
			}

		
	},
	mounted() {},
	}
</script>
<style scoped>
	.doh_deert {
		position: absolute;
		right: 20upx;
		top: 0;
	}

	.sheng_rtde {
		background: #fff;
		border: 1px solid #E0E0E0;
		height: 160upx;
		width: 100%;
		padding-top: 20upx;
		font-size: 30upx;
	}
</style>
