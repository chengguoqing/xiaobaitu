<template>
	<view class="bgff btm df_hh_ddr pr">
		<input type="text" :placeholder="placeholder" v-model="visible" v-if="!type" />
		<input type="number" :placeholder="placeholder" v-model="visible" v-if="type==2" />
		<input type="text" password="true" :placeholder="placeholder" v-model="visible" v-if="type==3" />
		<input type="search" password="true" :placeholder="placeholder" v-model="visible" v-if="type==4" />
		<view class="rigt_dfg ls" v-if="rightText" @click="rTextCabat">
			{{rightText}}
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			value: "",
			type: "", //1文本  2数字  3密码 4搜索
			placeholder: "",
			rightText: ""
		},
		data() {
			return {
				visible: "",
				sd_dff: "number"
			}
		},
		watch: {
			value(val) {
				this.visible = val;
			},
			visible(val) {
				this.$emit('input', val);
			}
		},
		methods: {
			cancel() {
				this.visible = false;
			},
			rTextCabat() {
				this.$emit("rTextCabat")
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.df_hh_ddr input {
		height: 70upx;
		text-indent: 0px;
		padding-left: 20upx !important;
		font-size: 26upx;
	}

	.rigt_dfg {
		font-size: 22upx;
		position: absolute;
		right: 10upx;
		top: 0upx;
		background: #fff;
		line-height: 70upx;
		z-index: 99;
	}
</style>
