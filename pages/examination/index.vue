<template>
	<view>
		<view class="cen fz32 pt40 z3">
			新手考试任务
		</view>
		<view class="fz28 z9 dsf_deeer mt20">
			您好,为了您的财产安全以及避免新手用户在试用过程中出
			现操作问题带来不必要的麻烦,平台规定在使用此应用前需要完
			成新手考试后才能开始接手任务,请您认真完成以下选择题(如
			果在具体的操作中遇到其他问题建议您先去系统的帮助中心寻找
			答案哦~)。

		</view>
		<navigator class="ls fz32 mt60 bgff dsf_dfrrtyx dx_btn cen" @click="cuowu_e" url="/pages/examination/statrExamination">
			开始考试
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
<style scoped>
	.dsf_deeer{
		line-height: 1.5;
		text-indent: 40upx;
	}
</style>
