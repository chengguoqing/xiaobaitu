<!-- 申诉中心 -->
<template>
	<view class="page_index">
		<dx_tab :title_d="title_d">
		 <view class="df_ff_dff" v-for="(sd,idx) in title_d" v-if="index_d==idx">
			<view class="bgff bbm pd pt15 pm15" v-for="(sd,idx_e) in sd.date_df">
				<view class="dx_row df_jh_deet">
					<view class="dx_col_15 fz32 z6">
						订单编号{{sd.id}}：62907145
					</view>
					<view class="dx_col_9 z9  fz26">
						2018-10-06 11:26:50
					</view>
				</view>
				<view class="dx_row mt5">
					<view class="dx_col_20 z9 fz26">
						[类型]文字文字文字文字文字文字文字文
					</view>
					<view class="dx_col_4 z9 tr fz26 ">
						已完结
					</view>
				</view>
			</view>
		</view> 
		</dx_tab>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title_d: [{
					name: "我发起的申诉",
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
					name: "我收到的申诉",
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
		components: {

		},
		computed: {

		},

		methods: {
			
		},

		onPullDownRefresh() {
			
		},
		mounted() {

		},
	}
</script>

<style scoped>

</style>
