require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([40],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('view', {\n    staticClass: \"pd\"\n  }, [_c('view', {\n    staticClass: \"zhuyi_dsd pd mt20 b\"\n  }, [_vm._v(\"\\n\\t\\t\\t注意事项\\n\\t\\t\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"fz28 z6 ln pt20 pm20 pd\"\n  }, [_vm._v(\"\\n\\t\\t\\t账号审核时间周一至周五账号提交后3个工作日内完成审\\n\\t\\t\\t核,如遇周末或节假日顺延审核工作人工进行,买手请耐\\n\\t\\t\\t心等,新手务必看下方的审核要求!\\n\\t\\t\")]), _vm._v(\" \"), _c('navigator', {\n    staticClass: \"dx_btn fz30 bghs cen\",\n    attrs: {\n      \"url\": \"/pages/BindingTaobao/BindingRequirements\"\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t进入查看绑定要求\\n\\t\\t\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"pt20 pm20 pd fz30 z3\"\n  }, [_vm._v(\"\\n\\t\\t\\t账号信息\\n\\t\\t\")])], 1), _vm._v(\" \"), _c('dx_input', {\n    attrs: {\n      \"placeholder\": \"请输入账号\",\n      \"mpcomid\": 'BbG-0'\n    }\n  }), _vm._v(\" \"), _c('dx_input', {\n    attrs: {\n      \"placeholder\": \"收货人\",\n      \"mpcomid\": 'cBU-1'\n    }\n  }), _vm._v(\" \"), _c('dx_input', {\n    attrs: {\n      \"type\": \"2\",\n      \"placeholder\": \"收货人手机\",\n      \"mpcomid\": 's2y-2'\n    }\n  }), _vm._v(\" \"), _c('view', {\n    staticClass: \"dx_select btm pr\",\n    attrs: {\n      \"eventid\": '2GM-0'\n    },\n    on: {\n      \"click\": _vm.xzcheng_dr\n    }\n  }, [(!_vm.pickerText) ? _c('text', {\n    staticClass: \"z9\"\n  }, [_vm._v(\"\\n\\t\\t\\t请选择省份、市、县级市\\n\\t\\t\")]) : _c('text', {\n    staticClass: \"z3\"\n  }, [_vm._v(\"\\n\\t\\t\\t\" + _vm._s(_vm.pickerText) + \"\\n\\t\\t\")])]), _vm._v(\" \"), _c('view', {\n    staticClass: \"pr\"\n  }, [_c('dx_input', {\n    attrs: {\n      \"placeholder\": \"详细地址\",\n      \"mpcomid\": 'OaM-3'\n    }\n  })], 1), _vm._v(\" \"), _vm._m(0), _vm._v(\" \"), _c('dx_input', {\n    attrs: {\n      \"placeholder\": \"请输入性别\",\n      \"value\": \"男\",\n      \"mpcomid\": 'wig-4'\n    }\n  }), _vm._v(\" \"), _c('dx_input', {\n    attrs: {\n      \"placeholder\": \"请输入年龄\",\n      \"value\": \"32\",\n      \"mpcomid\": 'fmK-5'\n    }\n  }), _vm._v(\" \"), _c('picker', {\n    attrs: {\n      \"range\": _vm.array,\n      \"range-key\": \"name\",\n      \"eventid\": '77D-1'\n    },\n    on: {\n      \"change\": _vm.bindPickerChange\n    }\n  }, [_c('view', {\n    staticClass: \"picker fz30 dx_select btm\"\n  }, [(_vm.index) ? _c('text', [_vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(_vm.array[_vm.index].name) + \"\\n\\n\\t\\t\\t\")]) : _c('text', {\n    staticClass: \"z9\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t请选择等级\\n\\t\\t\\t\")])])]), _vm._v(\" \"), _c('view', {\n    staticClass: \"picker fz30 dx_select btm\",\n    attrs: {\n      \"eventid\": 'HVo-2'\n    },\n    on: {\n      \"click\": function($event) {\n        _vm.isze_e = true\n      }\n    }\n  }, [(_vm.fenlei_e.length <= 0) ? _c('text', {\n    staticClass: \"z9\"\n  }, [_vm._v(\"请选择分类\")]) : _c('text', [_vm._v(_vm._s(_vm.fenlei_e))])]), _vm._v(\" \"), (_vm.isze_e) ? _c('view', {}, [_vm._m(1), _vm._v(\" \"), _c('view', {\n    staticClass: \"pl20 dx_row pt5\"\n  }, _vm._l((_vm.fenlei), function(sd, index) {\n    return _c('view', {\n      staticClass: \"dx_col_8 pr20 mb20 pm5\"\n    }, [_c('view', {\n      staticClass: \"cjg_eyd fz28\",\n      class: sd.cls,\n      attrs: {\n        \"eventid\": 'XbS-3-' + index\n      },\n      on: {\n        \"tap\": function($event) {\n          _vm.sd_dffsd(sd)\n        }\n      }\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\\t\" + _vm._s(sd.name) + \"\\n\\t\\t\\t\\t\")])])\n  }))]) : _vm._e(), _vm._v(\" \"), _vm._m(2), _vm._v(\" \"), _c('view', {\n    staticClass: \"dx_row\"\n  }, _vm._l((_vm.img_d), function(sd, index) {\n    return _c('view', {\n      staticClass: \"dx_col_8 pd mt20\"\n    }, [_c('image', {\n      staticClass: \"sd_jh_drrt\",\n      attrs: {\n        \"src\": sd.url,\n        \"mode\": \"scaleToFill\",\n        \"eventid\": 'wya-4-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.lltup(sd.url)\n        }\n      }\n    }), _vm._v(\" \"), _c('view', {\n      staticClass: \"cen fz28 z9 mt10\"\n    }, [_vm._v(\"\\n\\t\\t\\t\\t\" + _vm._s(sd.name) + \"\\n\\t\\t\\t\")])])\n  })), _vm._v(\" \"), _c('view', {\n    staticClass: \"pd pm20\"\n  }, [_c('view', {\n    staticClass: \"dx_btn  cen cf fz32 yj4 bghs cf fz30 mt40\",\n    attrs: {\n      \"eventid\": 'jde-5'\n    },\n    on: {\n      \"click\": _vm.yijiansc\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t一键上传图片\\n\\t\\t\")]), _vm._v(\" \"), _c('view', {\n    staticClass: \"mt20 dx_btn cen fz30 bgls\"\n  }, [_vm._v(\"\\n\\t\\t\\t提交审核\\n\\t\\t\")])]), _vm._v(\" \"), _c('mpvueCityPicker', {\n    attrs: {\n      \"showPicker\": _vm.is_dff,\n      \"eventid\": 'VFa-6',\n      \"mpcomid\": 'o1l-6'\n    },\n    on: {\n      \"close_e\": function($event) {\n        _vm.is_dff = false\n      },\n      \"onConfirm\": _vm.onConfirm\n    }\n  })], 1)\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"pd\"\n  }, [_c('view', {\n    staticClass: \"pt20 pm20 pd fz30 z3\"\n  }, [_vm._v(\"\\n\\t\\t\\t帐号属性(\"), _c('text', {\n    staticClass: \"red\"\n  }, [_vm._v(\"与实名认证的身份证信息一致\")]), _vm._v(\")\\n\\t\\t\")])])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"fz28 z9 pd pt20 pm20 ln\"\n  }, [_vm._v(\"\\n\\t\\t\\t请任意选择\"), _c('text', {\n    staticClass: \"red\"\n  }, [_vm._v(\"三\")]), _vm._v(\"个淘宝号经常购买的商品类目,提交后不可以自\\n\\t\\t\\t行修改,如需要修改请联系人工客服处理;只有选择了购买类\\n\\t\\t\\t目的买手才能接受相关要求的任务\\n\\t\\t\")])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"pd\"\n  }, [_c('view', {\n    staticClass: \"pt20  pd fz30 z3\"\n  }, [_vm._v(\"\\n\\t\\t\\t图片示例(\"), _c('text', {\n    staticClass: \"red\"\n  }, [_vm._v(\"点击可放大\")]), _vm._v(\")\\n\\t\\t\")])])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-5b06336e\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-5b06336e\",\"hasScoped\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!E:/uni_app/xiaobaitu/pages/BindingTaobao/addTB.vue\n// module id = 100\n// module chunks = 40\n\n");

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(1);var _vue2 = _interopRequireDefault(_vue);\nvar _addTB = __webpack_require__(91);var _addTB2 = _interopRequireDefault(_addTB);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_addTB2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// E:/uni_app/xiaobaitu/pages/BindingTaobao/addTB.js\n// module id = 90\n// module chunks = 40\n\n//# sourceURL=uni-app:///pages/BindingTaobao/addTB.js?1482");

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_addTB_vue__ = __webpack_require__(93);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_addTB_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_addTB_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5b06336e_hasScoped_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_addTB_vue__ = __webpack_require__(100);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(92)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_addTB_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5b06336e_hasScoped_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_addTB_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"E:\\\\uni_app\\\\xiaobaitu\\\\pages\\\\BindingTaobao\\\\addTB.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] addTB.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-5b06336e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-5b06336e\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// E:/uni_app/xiaobaitu/pages/BindingTaobao/addTB.vue\n// module id = 91\n// module chunks = 40\n\n");

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-5b06336e\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!E:/uni_app/xiaobaitu/pages/BindingTaobao/addTB.vue\n// module id = 92\n// module chunks = 40\n\n");

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _mpvueCityPicker = __webpack_require__(3);var _mpvueCityPicker2 = _interopRequireDefault(_mpvueCityPicker);\nvar _config = __webpack_require__(4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tarray: [{\n\t\t\t\tname: 0 }],\n\n\t\t\tis_dff: false,\n\t\t\tindex: \"\",\n\t\t\tform: {\n\t\t\t\tsex: \"男\" },\n\n\t\t\tfenlei_e: [],\n\t\t\tis_pup: false, //是否显示选择城市下拉框\n\t\t\tpickerText: \"\",\n\t\t\tisze_e: false, //分类折叠\n\t\t\tfenlei: \"\",\n\t\t\ttempFilePaths: \"\",\n\t\t\timg_d: [{\n\t\t\t\turl: \"../../static/img/fengmian_a.png\",\n\t\t\t\tname: \"信誉等级\" },\n\t\t\t{\n\t\t\t\turl: \"../../static/img/fengmian_a.png\",\n\t\t\t\tname: \"花呗\" },\n\t\t\t{\n\t\t\t\turl: \"../../static/img/fengmian_a.png\",\n\t\t\t\tname: \"实名认证\" },\n\t\t\t{\n\t\t\t\turl: \"../../static/img/fengmian_a.png\",\n\t\t\t\tname: \"淘气值截图\" }] };\n\n\n\t},\n\tcomponents: {\n\t\tmpvueCityPicker: _mpvueCityPicker2.default },\n\n\tmethods: {\n\t\tonConfirm: function onConfirm(e) {\n\t\t\tthis.is_dff = false;\n\t\t\tuni.hideKeyboard();\n\t\t\tthis.pickerText = e;\n\t\t},\n\t\tbindPickerChange: function bindPickerChange(e) {\n\t\t\tthis.index = e.mp.detail.value;\n\t\t\tconsole.log(JSON.stringify(e));\n\t\t},\n\t\tsd_dffsd: function sd_dffsd(sd) {var _this = this; //分类列表点击\n\t\t\tvar sd_drt = 0;\n\t\t\tthis.fenlei.map(function (a) {\n\t\t\t\tif (a.cls) {\n\t\t\t\t\tsd_drt++;\n\t\t\t\t}\n\t\t\t});\n\t\t\tif (sd_drt < 3) {\n\t\t\t\tsd.cls ? sd.cls = \"\" : sd.cls = 'act',\n\t\t\t\tthis.fenlei_e = [];\n\t\t\t\tthis.fenlei.map(function (a) {\n\t\t\t\t\tif (a.cls) {\n\t\t\t\t\t\t_this.fenlei_e.push(a.name);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tthis.fenlei_e = this.fenlei_e.join(\"/\");\n\t\t\t} else {\n\t\t\t\tif (!sd.cls) {\n\t\t\t\t\tuni.showToast({\n\t\t\t\t\t\ticon: \"none\",\n\t\t\t\t\t\ttitle: \"已选择3个了请取消一个\" });\n\n\t\t\t\t\tthis.isze_e = false;\n\t\t\t\t}\n\t\t\t\tsd.cls = \"\";\n\n\n\t\t\t}\n\n\t\t},\n\t\txzcheng_dr: function xzcheng_dr() {//选择城市输入框点击事件\n\t\t\tsetTimeout(function () {\n\t\t\t\tuni.hideKeyboard();\n\t\t\t}, 500);\n\n\t\t\tthis.is_dff = true;\n\n\t\t},\n\t\tyijiansc: function yijiansc() {//一键上传按钮触发\n\t\t\tvar th = this;\n\t\t\tuni.chooseImage({\n\t\t\t\tcount: 4, //默认9\n\t\t\t\tsourceType: ['album'], //从相册选择\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tth.tempFilePaths = res.tempFilePaths;\n\t\t\t\t\tres.tempFilePaths.map(function (a, b) {\n\t\t\t\t\t\tth.img_d[b].url = a;\n\t\t\t\t\t});\n\t\t\t\t} });\n\n\t\t},\n\t\tlltup: function lltup(current) {\n\t\t\tvar th = this;\n\n\t\t\tuni.previewImage({\n\t\t\t\tcurrent: current,\n\t\t\t\turls: th.tempFilePaths });\n\n\t\t} },\n\n\tmounted: function mounted() {\n\t\tthis.array = _config.config.taobaoGrade_json;\n\t\tthis.fenlei = _config.config.showCategory_json;\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!E:/uni_app/xiaobaitu/pages/BindingTaobao/addTB.vue\n// module id = 93\n// module chunks = 40\n\n//# sourceURL=uni-app:///pages/BindingTaobao/addTB.vue?88f6");

/***/ })

},[90]);