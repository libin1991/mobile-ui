!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.vuxDialog=o():t.vuxDialog=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var s=e[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(4)},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},head:{type:String,"default":""},content:{type:String,"default":""},buttons:{type:Array,"default":[]}}}},function(t,o){},function(t,o){t.exports="<div :class=\"[buttons.length < 3 ? 'mui-dialog-confirm' : 'mui-dialog-general']\" v-show=show> <div class=mui-mask></div> <div class=mui-dialog> <div class=mui-dialog-hd><strong class=mui-dialog-title>{{ head }}</strong></div> <div class=mui-dialog-bd> {{{ content }}} <slot></slot> </div> <div class=mui-dialog-ft> <a v-for=\"button in buttons\" :class=\"['mui-btn-dialog'].concat(button.classes)\" @click=button.onClick>{{ button.name }}</a> </div> </div> </div>"},function(t,o,e){var i,s;e(2),i=e(1),s=e(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});