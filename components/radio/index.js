!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxRadio=e():t.vuxRadio=e()}(this,function(){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(8)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),r=i(n),s=o(7),u=i(s);e["default"]={ready:function(){},mixins:[r["default"]],components:{InlineDesc:u["default"]},props:{options:{type:Array,required:!0},value:{type:String,"default":"",twoWay:!0},inlineDesc:{type:String}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched()}},data:function p(){var p={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return p},watch:{focus:function(t){t&&this.$els.input.focus()}}}},function(t,e){},function(t,e){},function(t,e){t.exports="<span class=mui-label-desc><slot></slot></span>"},function(t,e){t.exports='<label class="mui-group-item mui-cell-radio mui-check-label" for=radio-{{uuid}}-{{index}} v-for="(index, option) in options"> <div class="mui-group-item-bd mui-group-item-primary"> <p>{{ option.text }}</p> </div> <div class=mui-group-item-ft> <input type=radio class=mui-radio id=radio-{{uuid}}-{{index}} :value=option.value v-model=value> <span class=weui-icon-checked></span> </div> </label>'},function(t,e,o){var i,n;o(4),n=o(5),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(3),i=o(2),n=o(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});