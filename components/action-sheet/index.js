!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxActionSheet=e():t.vuxActionSheet=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1,twoWay:!0},buttons:{type:Array,"default":[]},cancelText:{type:String,"default":"取消"}},methods:{closeActionSheet:function(){this.show=!1}}}},function(t,e){},function(t,e){t.exports="<div v-show=show transition=mui-actionsheet> <div class=mui-mask-transition @click=closeActionSheet></div> <div class=mui-actionsheet> <div class=mui-actionsheet-menu> <div v-for=\"button in buttons\" :class=\"['mui-actionsheet-button'].concat(button.classes)\" @click=button.onClick> {{ button.name }} </div> </div> <div class=mui-actionsheet-action> <div class=mui-actionsheet-button @click=closeActionSheet>{{ cancelText || '取消' }}</div> </div> </div> </div>"},function(t,e,o){var n,i;o(2),n=o(1),i=o(3),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});