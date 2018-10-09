exports.base = {
	install: function(Vue, options) {
		Vue.prototype.car_number = "515"
		Vue.prototype.keFu = function() {
			uni.showActionSheet({
				itemList: ['返款问题：993768343', '客服一：993768343', '客服er：993768343', '客服三：993768343'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		}
	}
}
