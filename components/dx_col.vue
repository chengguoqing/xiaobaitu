<template>
	<view class="dx_col" :class="'dx_col_'+num" :style="{'padding-left':gutter+'px','padding-right':gutter+'px'}">

		<slot></slot>
	</view>
</template>
<script>
	export default {
		props: {
			num: "",
			gutter: ""
		},
		data() {
			return {

			}
		},
		components: {

		}
	}
</script>
<style scoped>
	.dx_col {
		float: left;
	}

	.dx_col_8 {
		background-clip: content-box;
		width: 33.33333%;
	}









	.dx_col_1 {
		width: 4.16667%
	}

	.dx_col_offset-1 {
		margin-left: 4.16667%
	}

	.dx_col_offset-2 {
		margin-left: 8.33333%
	}

	.dx_col_offset-3 {
		margin-left: 12.5%
	}

	.dx_col_offset-4 {
		margin-left: 16.66667%
	}


	.dx_col_2 {
		width: 8.33333%
	}

	.dx_col_offset-5 {
		margin-left: 20.83333%
	}

	.dx_col_offset-6 {
		margin-left: 25%
	}

	.dx_col_offset-7 {
		margin-left: 29.16667%
	}

	.dx_col_offset-8 {
		margin-left: 33.33333%
	}

	.dx_col_offset-9 {
		margin-left: 37.5%
	}

	.dx_col_offset-10 {
		margin-left: 41.66667%
	}

	.dx_col_offset-11 {
		margin-left: 45.83333%
	}

	.dx_col_offset-12 {
		margin-left: 50%
	}

	.dx_col_offset-13 {
		margin-left: 54.16667%
	}

	.dx_col_offset-14 {
		margin-left: 58.33333%
	}

	.dx_col_offset-15 {
		margin-left: 62.5%
	}

	.dx_col_offset-16 {
		margin-left: 66.66667%
	}

	.dx_col_offset-17 {
		margin-left: 70.83333%
	}

	.dx_col_offset-18 {
		margin-left: 75%
	}

	.dx_col_offset-19 {
		margin-left: 79.16667%
	}

	.dx_col_offset-20 {
		margin-left: 83.33333%
	}

	.dx_col_offset-21 {
		margin-left: 87.5%
	}

	.dx_col_offset-22 {
		margin-left: 91.66667%
	}

	.dx_col_offset-23 {
		margin-left: 95.83333%
	}

	.dx_col_offset-24 {
		margin-left: 100%
	}
</style>
