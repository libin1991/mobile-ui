!function(i,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.muiToast=e():i.muiToast=e()}(this,function(){return function(i){function e(o){if(t[o])return t[o].exports;var a=t[o]={exports:{},id:o,loaded:!1};return i[o].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var t={};return e.m=i,e.c=t,e.p="",e(0)}([function(i,e,t){i.exports=t(4)},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={ready:function(){document.body.appendChild(this.$el),this.$els.mask.addEventListener("touchmove",function(i){return i.stopPropagation(),i.preventDefault(),!1},!1)},props:{type:{type:String,"default":"loading"},show:{type:Boolean,"default":!1},text:{type:String,"default":"数据加载中"}},beforeDestroy:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}}},function(i,e){},function(i,e){i.exports='<div :class="{\n  \'mui-loading-toast\': type === \'loading\',\n  \'mui-success-toast\': type === \'success\',\n  \'mui-warning-toast\': type === \'warning\'\n}" v-show=show> <div class=mui-mask-transparent v-el:mask></div> <div class=mui-toast> <i class=mui-icon-toast v-if="!(type === \'loading\')"></i> <div class=mui-loading v-if="(type === \'loading\')"> <div class="mui-loading-leaf mui-loading-leaf-0"></div> <div class="mui-loading-leaf mui-loading-leaf-1"></div> <div class="mui-loading-leaf mui-loading-leaf-2"></div> <div class="mui-loading-leaf mui-loading-leaf-3"></div> <div class="mui-loading-leaf mui-loading-leaf-4"></div> <div class="mui-loading-leaf mui-loading-leaf-5"></div> <div class="mui-loading-leaf mui-loading-leaf-6"></div> <div class="mui-loading-leaf mui-loading-leaf-7"></div> <div class="mui-loading-leaf mui-loading-leaf-8"></div> <div class="mui-loading-leaf mui-loading-leaf-9"></div> <div class="mui-loading-leaf mui-loading-leaf-10"></div> <div class="mui-loading-leaf mui-loading-leaf-11"></div> </div> <p class=mui-toast-content v-if=text> {{text}} <slot></slot> </p> </div> </div>'},function(i,e,t){var o,a;t(2),o=t(1),a=t(3),i.exports=o||{},i.exports.__esModule&&(i.exports=i.exports["default"]),a&&(("function"==typeof i.exports?i.exports.options||(i.exports.options={}):i.exports).template=a)}])});