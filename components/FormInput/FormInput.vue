<template>
  <div class="form-input" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
    <div>
      <textarea
        v-if="type === 'textarea'"
        v-show="editable"
        v-model="valueInput" 
        :style="titleTextareaStyle"
        :placeholder="placeholder"
        :disabled="disabled"
      ></textarea>
      <input
        v-if="type === 'text'"
        v-show="editable"
        v-model="valueInput"
        :placeholder="placeholder"
        :disabled="disabled"
        type="text"
      />
      <div v-show="!editable" class="preview-text">{{ valueInput }}</div>
    </div>
    <div :class="['title-border', showTitleBorder ? '' : 'hidden']"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from 'vue';

export default defineComponent({
    name: 'FormInput',
    emits: ['change'],
    props: {
        disabled: {
          default: false,
          type: Boolean
        },
        value: {
            type: String,
            default: ''
        },
        editable: {
          type: Boolean,
          default: false
        },
        type: {
          type: String,
          default: 'textarea' // 'text' 普通的input输入框 'textarea' 文本域
        },
        placeholder: {
          default: '请输入',
          type: String
        }
    },  
    setup(props, ctx) {
        const state = reactive({
            valueInput: '',
            showTitleBorder: false,
            titleTextareaStyle: {
                maxHeight: '9.0072e+15px',
                height: '20px'
            }
        });

        onBeforeMount(() => {
          state.valueInput = props.value;
          initTextareaStyle();
        });

        const initTextareaStyle = function() {
          let reg = /\n/g;
          let matchArray = state.valueInput.match(reg);
          let wrapCount = matchArray ? matchArray.length : 0;
          state.titleTextareaStyle.height = 20 + wrapCount * 20 + 'px';
        }

        watch(() => state.valueInput, (newVal, oldVal) => {
          initTextareaStyle();
          ctx.emit('change', newVal);
        });


        watch(() => props.value, (newVal, oldVal) => {
          state.valueInput = newVal;
        });


        const handleMouseOver = function() {
          state.showTitleBorder = true;
        }

        const handleMouseOut = function() {
          state.showTitleBorder = false;
        }

        return {
          ...state,
          handleMouseOver,
          handleMouseOut
        }
    },
})
</script>


<style lang="less">
@import './FormInput.less';
</style>