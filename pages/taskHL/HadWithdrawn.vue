已撤销的任务
<template>
	<view>
		<navigator url="" class="bgff bbm pd pt15 pm15" v-for="(sd,idx_e) in 20">
					<image src="../../static/img/logo.png" class="u_fenmian"></image>
					<view class="ov pl20">
						<view class="dx_row"> 
							<view class="dx_col_12 dian z9 fz30">
								<icon class="dx icon-wangwang z9 fz40 cz"></icon>
								就这么恶心麻烦
							</view>
							
						</view>
		
						<view class="dx_row btm pt10 ln fz30 z6">
						
							订单编号：22929028<br>
							撤销时间：2018.06.03<br>
							撤销原因：买手自己撤销
							
							
						</view>
					</view>
					<view class="qc"></view>
				</navigator>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped></style>
