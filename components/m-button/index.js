!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxMButton=e():t.vuxMButton=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{btype:{type:String,"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},transparent:{type:Boolean,"default":!1},text:{type:String}}}},function(t,e){},function(t,e){t.exports="<a href=javascript: class=mui-btn :class=\"{'mui-btn-disabled': disabled,\n  'mui-btn-mini': mini,\n  'mui-btn-transparent': transparent,\n  'mui-btn-default': btype === 'default',\n  'mui-btn-brand': btype === 'brand',\n  'mui-btn-primary': btype === 'primary',\n  'mui-btn-warn': btype === 'warn',\n  'mui-btn-dangerous': btype === 'dangerous'\n}\">{{ text }}<slot></slot></a>"},function(t,e,n){var o,r;n(2),o=n(1),r=n(3),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});