<template>
  <div class="mui-group-item mui-group-item-select" :class="{'mui-select-after': title}">
    <div class="mui-group-item-hd">
      <label class="mui-label" :style="{width: labelWidth || defaultLabelWidth + 'em'}" v-if="title">{{title}}</label>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="mui-group-item-bd mui-group-item-primary">
      <div class="mui-select-placeholder" v-if="!(value) && value !== 0">{{ placeholder }}</div>
      <select class="mui-select" v-model="value">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import InlineDesc from '../inline-desc/'

export default {
  ready () {
  },
  mixins: [Base],
  components: {
    InlineDesc
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    inlineDesc: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    }
  },
  computed: {
    defaultLabelWidth: function () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import (reference) "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
