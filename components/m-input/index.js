!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxMInput=t():e.vuxMInput=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(8)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),r=n(o),s=i(7),u=n(s);t["default"]={ready:function(){this.title||this.placeholder||console.warn("no title and no placeholder?")},mixins:[r["default"]],components:{InlineDesc:u["default"]},props:{title:{type:String,"default":""},placeholder:{type:String},value:{type:String,"default":"",twoWay:!0},keyboard:{type:String},inlineDesc:{type:String},isType:{type:String},min:Number,max:Number,showClear:{type:Boolean,"default":!0},type:{type:String,"default":"text"}},computed:{pattern:function(){return"number"===this.keyboard?"[0-9]*":void 0},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched()}},data:function l(){var l={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return l},watch:{focus:function(e){e&&this.$els.input.focus()}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<span class=mui_label_desc><slot></slot></span>"},function(e,t){e.exports='<div class=mui_group_item> <div class=mui_group_item_hd> <label class=mui_label :style="{width:labelWidth + \'em\'}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="mui_group_item_bd mui_group_item_primary"> <input class=mui_input :type=type :pattern=pattern placeholder={{placeholder}} v-model=value @blur=blur v-el:input/> </div> <div class=mui_group_item_ft> <i class="weui_icon weui_icon_clear" v-show="showClear && value" @click=clear></i> </div> </div>'},function(e,t,i){var n,o;i(4),o=i(5),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)},function(e,t,i){var n,o;i(3),n=i(2),o=i(6),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}])});