<template> 
	<view class="bgff">
		<view class="fz28  bbm pd da_list" v-if="!isjt&&!rtext">
			{{title}} 
		</view>
		<view class="fz28  bbm pd da_list" v-if="isjt&&rtext">
			{{title}}
			<view class="right_ert">
				<text class="z9 cz jieao_er fz24">{{rtext}}</text>
			

				<icon class="dx_ic icon-i-right sdf_jh_Dert"></icon>
			</view>
			
		</view>
		
		<view class="fz28  bbm pd da_list" v-if="!isjt&&rtext">
			{{title}}
			<view class="right_ert">
				<text class="z9 cz jieao_er ab fz24">{{rtext}}</text>
			
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: "",
			isjt:"",
			rtext:""
		}
	}
</script>

<style scoped="">

	.da_list {
		position: relative;
		line-height: 80upx;
	}

	.right_ert {
		position: absolute;
		right: 10upx;
		top: -10upx;
	}
	.jieao_er{
		position: relative;
		top: 10upx;
	}
	.jieao_er.ab{
		top: 15upx;
	}
	.sdf_jh_Dert{
		position: relative;
		top: 12upx;
	}
</style>
