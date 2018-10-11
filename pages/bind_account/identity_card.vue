<template>
	<view>
		<view class="">
			<view class="pt20 pm20 fz30 pd">
				第一步输入您的真实姓名
			</view>
			<dx_input placeholder="请输入真实姓名"></dx_input>
			<view class="pt20 pm20 fz30 pd">
				第二步输入您的身份证号码
			</view>
			<dx_input placeholder="请输入身份证号"></dx_input>
			<view class="pt20 pm20 fz30 pd">
				第三步上传身份信息
			</view>
			<view class="pd">
				<image src="../../static/img/addIcon.jpg" class="addIcon" @click="paizao" v-if="!img_df"></image>
				<image :src="img_df" class="addIcon" v-if="img_df" @click="isd_ou=true"></image>

				<view class=" z9 fz26 pt10">
					身份证正面图片
				</view>
			</view>


			<button class="ls fz32 mt80 bgff">保存</button>

		</view>
		
		<view class="pd pt40"  v-if="false">
			<view class="fz40 z6">
				身份证信息
			</view>
			<view class="fz30 z6 mt20">
				审核状态：审核通过
			</view>
			<view class="fz30 z6 mt20">
				姓名：独行工匠
			</view>
			<view class="fz30 z6 mt20">
				身份证照：
				<view class="mt20">
					<image src="../../static/img/addIcon.jpg" class="addIcon"></image>

				</view>
			</view>
		</view>
		
		

		<view class="ll_uiy_eer" v-if="isd_ou">
			<text class="xiugai_d" @click="paizao();isd_ou=false">
				修改图片
			</text>
			<image :src="img_df" mode="aspectFill" @click="isd_ou=false"></image>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				img_df: "",
				isd_ou:false
			}
		},
		components: {},
		methods: {
			paizao() {
				let th = this
				uni.chooseImage({
					sourceType: ["camera"],
					success(res) {
						th.img_df = res.tempFilePaths[0]
					}
				})
			}
		},
		mounted() {},
	}
</script>
<style scoped>
	.addIcon {
		width: 150upx;
		height: 150upx;
	}

	.ll_uiy_eer {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background: #000000;
	}

	.ll_uiy_eer image {
		width: 100%;
		height: 100%;
	}

	.xiugai_d {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 8upx;
		border: 1px solid #fff;
		color: #fff;
		font-size: 26upx;
		padding: 6upx 20upx;
		position: absolute;
		right: 20upx;
		top: 60upx;
	}
</style>
