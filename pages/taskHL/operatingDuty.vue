<template>
	<view>
		<view class="pd pt20 bgff pm20">
			<view class="ln fz30 z6">
				掌柜名:南*人*士*专*店<br>
				店铺名:南*人*士*专*店
			</view>
			<view class="mt30 z9 fz30 ln">
				<text class="cz">目标商品</text>

				<icon class="dx icon-label_fill cz ls ml10"></icon>

			</view> 

			<view class="mt10">
				<image src="../../static/img/fenming.jpg" class="fenming fl"></image>
				<view class="ov pl20 pr df_jh_dertxf">
					<view class="z9 fz30 ln">
						南*人*冬*毛*男*O*8*款*袖*恤*领
						绒*厚*士*底*织
					</view>
					<view class="fz30 z9 df_jh_derter">
						搜索展示价格:<text class="red">98.0元</text>
					</view>
				</view>
				<view class="qc">

				</view>
			</view>

		</view>

		<view class="sd_jh_drtx pd">
			<icon class="dx icon-msnui-protect z6 fz40 cz"></icon>
			<text class="fz30 z9 ml5">任务要点</text>
		</view>

		<view class="pd">
			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">
					任务类型
				</view>
				<view class="dx_col_7 fz28 red tr">
					手机浏览(淘宝)
				</view>
			</view>
			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">
					搜索关键字
				</view>
				<view class="dx_col_7 fz28 red tr">
					毛衣男2018新款
					<view class="yj4 bgls sd_jhgh_dert" @click="open_tao">
						打开淘宝
					</view>
				</view>
			</view>


			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">
					排序方式
				</view>
				<view class="dx_col_7 fz28 red tr">
					综合
				</view>
			</view>


			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">

					排序位置
				</view>
				<view class="dx_col_7 fz28 red tr">
					234人付款
				</view>
			</view>


			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">
					所在地
				</view>
				<view class="dx_col_7 fz28 red tr">

				</view>
			</view>



			<view class="dx_row pt20 pm20 bbm">
				<view class="dx_col_17 z9 fz30">
					价格区间
				</view>
				<view class="dx_col_7 fz28 red tr">
					无需筛选价格
				</view>
			</view>


		</view>

		<view class="sd_jh_drtx pd">
			<icon class="dx icon-createtask z6 fz40 cz"></icon>
			<text class="fz30 z9 ml5">商家额外要求</text>
		</view>
		<view class="pd pt20 pm20 fz28 red ln">
			填完关键词,选择天猫搜索,按照综合排序,一定要关键
			词进店,找不到可以卡价格,谢谢
		</view>

		<view class="sd_jh_drtx pd">
			<icon class="dx icon-warning_fill z6 fz40 cz"></icon>
			<text class="fz30 z9 ml5">注意事项</text>
		</view>
		<view class="fz28 z6 ln pd pt20 pm20">
			平台中介操作任务的卖号和在淘宝/天猫客户端中浏览商
			品的买号必须一致。<br>
			注意查看任务要求,选择正确的排序或搜索方式,请勿
			随意增加搜索条件。<br>
			恶意提交与任务无关的图片将根据买手处罚规则进行处
			罚。
		</view>



		<view class="sd_jh_drtx pd">
			<icon class="dx icon-iconset0136 z6 fz40 cz"></icon>
			<text class="fz30 z9 ml5">任务步骤</text>
		</view>



		<view class="pd pt30 pm20">
			<view class="fz34 ye">
				浏览任务 <text class="ls ml20">点击查看示例</text>
			</view>

			<view class="fz28 ln z9 mt10">
				.请确认使用<text class="ye">这么麻烦恶心</text> 账号登陆手机淘宝应用。<br>
				.打开淘宝/天猫手机客户端,手动输入搜索关键词,关键
				词不得自行修改。<br>
				.按要求筛选搜索条件,请勿随意增加搜索条件,进入商
				品自上而下缓缓浏览,至少浏览3分钟,在目标商品的详
				情中找到以下问题的答案。
			</view>
			<view class="pd mt10 pm10 red fz28">
				进店关键词链接:
				<text class="ls">如何复制进店关键词链接? </text>
			</view>

			<view class="dx_row">
				<view class="dx_col_15 f_jh_drtxc yj4 pd dian fz30 z9">
					【上手淘搜索“毛衣男2018新
				</view>
				<view class="dx_col_5 pl10">
					<view class="yj4 df_hhg_der">
						粘贴
					</view>
				</view>
				<view class="dx_col_2 pl10 cen">
					<icon class="dx icon-success_fill ls fz60"></icon>
				</view>
			</view>

			<view class="pd mt20 pm10 red fz28">
				请在目标商品详情中找到以下答案
				<text class="ls">如何找答案? </text>
				<view class="z6 mt10">
					答案提示:加*加*(一共4个字)
				</view>
			</view>


			<view class="dx_row">
				<view class="dx_col_15 f_jh_drtxc yj4 pd dian fz30 z9 pt15">
					<input class="w100 fz30 cz" placeholder="请输入答案" />
				</view>
				<view class="dx_col_5 pl10">
					<view class="yj4 df_hhg_der bgls">
						验证
					</view>
				</view>
				<view class="dx_col_2 pl10 cen">
					<icon class="dx icon-success_fill ls fz60"></icon>
				</view>
			</view>
			<view class="dx_btn ls cen fz32 bgff mt100">
				提交任务
			</view>
			<view class="z9 fz28 mt10 pm100">
				点击提交任务没有反应?
			</view>
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
			open_tao() { //打开淘宝

				if (plus.os.name == "Android") {
					plus.runtime.launchApplication({
						pname: "com.taobao.taobao"
					}, function(e) {
						plus.nativeUI.confirm("检查到您未安装\"淘宝\"，是否到商城搜索下载？", function(i) {
							if (i.index == 0) {
								plus.runtime.openURL("market://details?id=com.taobao.taobao");
							}
						});
					});
				} else if (plus.os.name == "iOS") {
					plus.runtime.launchApplication({
						action: "taobao://"
					}, function(e) {
						plus.nativeUI.confirm("检查到您未安装\"淘宝\"，是否到商城搜索下载？", function(i) {
							if (i.index == 0) {
								plus.runtime.openURL(
									"itms-apps://itunes.apple.com/cn/app/%E6%B7%98%E5%AE%9D-%E7%A7%BB%E5%8A%A8%E8%B4%AD%E7%89%A9-%E7%94%9F%E6%B4%BB%E7%A4%BE%E5%8C%BA/id387682726?mt=8"
								);
							}
						});
					});
				}
			}
		},
		mounted() {

		},
	}
</script>
<style scoped>
	.sd_jhg_der icon {}

	

	.df_jh_derter {
		position: absolute;
		left: 20upx;
		bottom: 0;
	}

	.df_jh_dertxf {
		height: 200upx;
	}

	.sd_jh_drtx {
		background: #D7D7D7;
		line-height: 65upx;
	}

	.sd_jhgh_dert {
		display: inline-block;
		padding: 6upx 20upx;
	}

	.dx_col_7.red.tr {
		position: relative;
		top: 4upx;
	}

	.f_jh_drtxc {
		background: #fff;
		height: 76upx;
		border: 1px solid #DDDDDD;
		line-height: 76upx;
	}

	.df_hhg_der {
		background: #F86194;
		color: #fff;
		height: 74upx;
		line-height: 74upx;
		text-align: center;
	}
</style>
