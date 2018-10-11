<!-- 用户名修改 -->
<template>
	<view>
		<view class="pd pt20 pm20 z3 fz30 ln">
			原用户名可接收短信的用户可自主验证修改用户名,修改后原有 的邀请关系不受影响;原用户名无法接受短信的用户,需要联系 在线客服验证后修改用户名。
		</view>
		
		<view class="dx_row bgff dx_btn fz30 pd">
			<view class="dx_col_12">
				原用户名
			</view>
			<view class="dx_col_12 tr">
				185****8998
			</view>
		</view>
		
		<dx_input  type="2" placeholder="请输入验证码" rightText="获取验证码" @rTextCabat="rTextCabat"></dx_input>

		
		<view class=" mt40">
			<navigator  class='dx_btn ls bgff cen  fz30' url="/pages/user_center/newUserNmae"> 下一步  </navigator>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		components: {},
		methods: {
			rTextCabat(){
				
			}
		},
		mounted() {},
	}
</script>
<style scoped></style>
