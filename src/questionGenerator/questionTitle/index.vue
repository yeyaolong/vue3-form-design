<template>
    <div 
        class='question-title'
        @click="handleEditableChange"
        v-clickoutside="handleClickoutSide"
    >
        <input v-if="state.editable" maxlength="30" type="text" autofocus id="questionaireTitle" v-model="state.title" placeholder="请输入表单标题" />
        <div v-else>{{ state.title }}</div>
    </div>
</template>

<script lang="ts">
import Clickoutside from '@directives/clickoutside/index';
import FormInput from '@components/FormInput/FormInput.vue';
import { defineComponent, onBeforeMount, reactive, watch } from 'vue'


type MyState = {
    title: string,
    editable: Boolean
}

export default defineComponent({
  name: 'QuestionTitle',
  components: {
      FormInput
  },
  directives: {
      Clickoutside
  },
  props: {
      questionaireTitle: {
          type: String,
          default: ''
      }
  },
  setup(props, ctx) {

      const state: MyState = reactive({
          title: '请输入表单标题',
          editable: false
      });

      onBeforeMount(() => {
          state.title = props.questionaireTitle ? props.questionaireTitle : '请输入表单标题';
      });

      const handleEditableChange = function() {
        state.editable = true;
        if (state.title === '请输入表单标题') {
            state.title = '';
        }
      }

      const handleClickoutSide = function() {
        state.editable = false;
        
        if (!state.title) {
            state.title = '请输入表单标题';
        }
      }


      return {
          state,
          // ...state 进行解析就变的不再响应式了
          handleEditableChange,
          handleClickoutSide
      }
  }
});
</script>

<style lang="less">
@import './index.less';
</style>