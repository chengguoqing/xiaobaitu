<template>
	<view> 
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		<dx_input v-model="form.sex"  placeholder="性别"></dx_input>
		
		<view class="dx_row">
			<view class="dx_col_8 pd mt20" v-for="sd in img_d">
				<image :src="sd.url" mode="scaleToFill" class="sd_jh_drrt"></image>
				<view class="cen fz28 z9 mt10">
					{{sd.name}}
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				form:{
					sex:"男"	
				},
				img_d:[
					{
						url:"../../static/img/logo.png",
						name:"信誉等级"
					},{
						url:"../../static/img/logo.png",
						name:"花呗"
					},{
						url:"../../static/img/logo.png",
						name:"实名认证"
					},{
						url:"../../static/img/logo.png",
						name:"淘气值截图"
					}
				]
				
			}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.sd_jh_drrt{
		width: 100%;
		height: 200upx;
	}
</style>
