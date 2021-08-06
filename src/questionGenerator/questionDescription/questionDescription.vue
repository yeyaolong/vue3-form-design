<template>
    <div 
        class="question-description"
        v-clickoutside="handleClickoutSide"
        @click="handleEditableChange"
    >
        <form-input
            v-model:value="state.questionaireDescription"
            :editable="state.editable"
            type="textarea"
            placeholder="点击设置描述"
            :disabled="false"
        ></form-input>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, watch } from 'vue'
import Clickoutside from '../../directives/clickoutside/index';
import FormInput from '../../../components/FormInput/FormInput.vue';
type MyState = {
    editable: boolean,
    questionaireDescription: string,
    textareaStyle: any
}

export default defineComponent({
  name: 'QuestionDescription',
  components: {
      FormInput
  },
  directives: {
      Clickoutside
  },
  props: {
      description: {
          type: String,
          default: ''
      }
  },
  setup(props, ctx) {
      let state: MyState = reactive({
          editable: false,
          questionaireDescription: '',
          textareaStyle: {
              maxHeight: '9.0072e+15px',
              height: '20px'
          }
      });

      const handleEditableChange = function(): void {
          state.editable = true;
      }

      const handleClickoutSide = function(): void {
          state.editable = false;
      }

      onBeforeMount(() => {
          state.questionaireDescription = props.description ? props.description : '点击设置描述';
      })
      
      watch(() => props.description, (newVal, oldVal) => {
          state.questionaireDescription = newVal;
      });

      watch(() => state.questionaireDescription, (newVal, oldVal) => {
          // 计算换行符数量，决定 textarea高度
            let reg = /\n/g;
            let matchArray = newVal.match(reg);
            let wrapCount = matchArray ? matchArray.length : 0;
            state.textareaStyle.height = 20 + wrapCount * 18 + 'px';

            ctx.emit('change', newVal);
      })

      return {
          state,
          handleEditableChange,
          handleClickoutSide,
      }
  }
});
</script>

<style lang="less">
@import './questionDescription.less';
</style>