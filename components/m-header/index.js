!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxMHeader=t():e.vuxMHeader=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var l=o[r]={exports:{},id:r,loaded:!1};return e[r].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(11)},function(e,t){"use strict";function o(e,t){var o=document.createElement("div");o.style.cssText=r(e),i[t]=!!o.style.length,l.className+=" "+(i[t]?"":"no-")+t}function r(e){for(var t="",o=0;o<s.length;o++)t+=s[o]+e;return t}Object.defineProperty(t,"__esModule",{value:!0});var l=document.documentElement,s=["-webkit-","-moz-","-ms-","-o-",""],i={};o("flex-basis: 1px;","flexbox"),o("box-direction: reverse;","flexboxlegacy"),o("flex-align: end;","flexboxtweener"),o("flex-wrap: wrap;","flexwrap"),i.flex=i.flexbox,i.legacy=i.flexboxlegacy,i.tweener=i.flexboxtweener,i.wrap=i.flexwrap,t["default"]=i},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),s=r(l);t["default"]={created:function(){this.supported=s["default"].flex},ready:function(){if(!this.supported){var e=this.$el.querySelectorAll(".mui-flexbox-item");this.$el.classList.remove("mui-flexbox"),this.$el.classList.add("mui-flexbox--unsupport");for(var t=e.length,o=100/t+"%",r=0;t>r;r++)e[r].style.width=o,e[r].style["box-sizing"]="border-box",e[r].style["margin-left"]=0,e[r].style["float"]="left"}},props:{marginLeft:{type:Number,"default":8},orient:{type:String,"default":"horizontal"}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(10),s=r(l),i=o(9),n=r(i);t["default"]={components:{Flexbox:s["default"],FlexboxItem:n["default"]},props:{title:{type:String},backText:{type:String},backCb:{type:Function}},methods:{handlerBackClick:function(){this.backCb?this.backCb():window.history.back()}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=mui-flexbox-item :style=\"{marginLeft: $parent.supported ? $parent.marginLeft + 'px' : 0}\"> <slot></slot> </div>"},function(e,t){e.exports="<div class=mui-flexbox :class=\"{'flex-col': orient == 'vertical', 'flex-row': orient == 'horizontal'}\"> <slot></slot> </div>"},function(e,t){e.exports="<flexbox class=mui-header :margin-left=0> <flexbox-item class=mui-header-left> <slot name=left> <div class=mui-header-back @click=handlerBackClick()> {{ backText }} </div> </slot> </flexbox-item> <flexbox-item class=mui-header-middle> <slot> <h1 class=mui-header-title> {{ title }} </h1> </slot> </flexbox-item> <flexbox-item class=mui-header-right> <slot name=right></slot> </flexbox-item> </flexbox>"},function(e,t,o){var r,l;l=o(6),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},function(e,t,o){var r,l;o(5),r=o(2),l=o(7),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)},function(e,t,o){var r,l;o(4),r=o(3),l=o(8),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),l&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=l)}])});