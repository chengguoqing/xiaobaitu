<!-- 已完成 列表-->
<template>
	<view>
		<navigator url="/pages/taskHL/taskXq" class="bgff bbm pd pt15 pm15" v-for="(sd,idx_e) in 20">
			<image src="../../static/img/logo.png" class="u_fenmian"></image>
			<view class="ov pl20">
				<view class="dx_row">
					<view class="dx_col_12 dian z9 fz30">
						<icon class="dx icon-wangwang z9 fz40 cz"></icon>
						就这么恶心麻烦
					</view>
					<view class="dx_col_12 z9 fz30 tr">
						2018.10.12
					</view>
				</view>

				<view class="dx_row btm pt10">
					<view class="dx_col_17">
						<text class="fz50 ls">￥5.83</text>
						<view class="fz30 z6 mt10" v-if="type!=2">
							垫资118.00元
						</view>
						<view class="fz30 red mt10" v-if="type==2">
							浏览|收藏商品|加购物车
						</view>
					</view>
					<view class="dx_col_7 tr" v-if="type!=2">
						<view class="dx_btn fz30 bghser cf yj4 sdf_h_der">已完成</view>
						
					</view>
				</view>
			</view>
			<view class="qc"></view>
		</navigator>




	</view>
</template>
<script>
	export default {
		data() {
			return {
				type:""
			}
		},
		components: {},
		methods: {},
		onLoad:function(de){
			this.type=de.type
		},
		mounted() {},
	}
</script>
<style scoped></style>
