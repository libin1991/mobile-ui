!function(i,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.vuxToast=a():i.vuxToast=a()}(this,function(){return function(i){function a(o){if(e[o])return e[o].exports;var t=e[o]={exports:{},id:o,loaded:!1};return i[o].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var e={};return a.m=i,a.c=e,a.p="",a(0)}([function(i,a,e){i.exports=e(4)},function(i,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a["default"]={props:{type:{type:String,"default":"loading"},show:{type:Boolean,"default":!1},text:{type:String,"default":"数据加载中"}}}},function(i,a){},function(i,a){i.exports='<div :class="{\n  \'mui-loading-toast\': type === \'loading\',\n  \'mui-success-toast\': type === \'success\',\n  \'mui-warning-toast\': type === \'warning\'\n}" v-show=show> <div class=mui-mask-transparent></div> <div class=mui-toast> <i class=mui-icon-toast v-if="!(type === \'loading\')"></i> <div class=mui-loading v-if="(type === \'loading\')"> <div class="mui-loading-leaf mui-loading-leaf-0"></div> <div class="mui-loading-leaf mui-loading-leaf-1"></div> <div class="mui-loading-leaf mui-loading-leaf-2"></div> <div class="mui-loading-leaf mui-loading-leaf-3"></div> <div class="mui-loading-leaf mui-loading-leaf-4"></div> <div class="mui-loading-leaf mui-loading-leaf-5"></div> <div class="mui-loading-leaf mui-loading-leaf-6"></div> <div class="mui-loading-leaf mui-loading-leaf-7"></div> <div class="mui-loading-leaf mui-loading-leaf-8"></div> <div class="mui-loading-leaf mui-loading-leaf-9"></div> <div class="mui-loading-leaf mui-loading-leaf-10"></div> <div class="mui-loading-leaf mui-loading-leaf-11"></div> </div> <p class=mui-toast-content v-if=text> {{text}} <slot></slot> </p> </div> </div>'},function(i,a,e){var o,t;e(2),o=e(1),t=e(3),i.exports=o||{},i.exports.__esModule&&(i.exports=i.exports["default"]),t&&(("function"==typeof i.exports?i.exports.options||(i.exports.options={}):i.exports).template=t)}])});