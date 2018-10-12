<!-- 任务列表 -->
<template>
	<view class="page_index">
		<dx_tab :title_d="title_d">

			<view class="df_ff_dff" v-for="(sd,idx) in title_d" v-if="index_d==idx">
				<navigator url="" class="bgff bbm pd pt15 pm15" v-for="(sd,idx_e) in sd.date_df">

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
								<view class="fz30 z6 mt10">
									垫资118.00元
								</view>
							</view>
							<view class="dx_col_7 tr">
								<view class="dx_btn fz30 bgls cf yj4 sdf_h_der">待评价</view>
								<view class="red fz30 mt10">
									垫付任务
								</view>
							</view>
						</view>

					</view>

					<view class="qc">

					</view>
				</navigator>
			</view>


		</dx_tab>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title_d: [{
					name: "待操作",
					cls: "act",
					page: 1,
					date_df: [{
							id: 0
						},
						{
							id: 1
						}
					]
				}, {
					name: "待返款",
					cls: "",
					page: 1,
					date_df: [{
							id: 2
						},
						{
							id: 3
						}
					]
				}, {
					name: "发货中",
					cls: "",
					page: 1,
					date_df: [{
							id: 2
						},
						{
							id: 3
						}
					]
				}, {
					name: "待确认",
					cls: "",
					page: 1,
					date_df: [{
							id: 2
						},
						{
							id: 3
						}
					]
				}],

			}
		},
		components: {},
		methods: {},
		mounted() {},
	}
</script>
<style scoped>
	.u_fenmian {
		width: 170upx;
		height: 170upx;
		float: left;
	}

	.sdf_h_der {
		text-align: center;
		line-height: 55upx;
		margin-top: 10upx;
	}
</style>
