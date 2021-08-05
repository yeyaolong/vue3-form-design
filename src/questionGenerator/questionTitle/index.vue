<template>
    <div 
        class='question-title'
        @click="handleEditableChange"
        v-clickoutside="handleClickoutSide"
    >
        <input v-show="editable" id="questionaireTitle" v-model="title" placeholder="请输入表单标题" />
        <div v-show="!editable">{{ title }}</div>
    </div>
</template>

<script lang="ts">
// import Clickoutside from 'element-plus/packages/directives/click-outside/index';
import Clickoutside from '../../directives/clickoutside/index';
import FormInput from '../../../components/FormInput/FormInput.vue';
import { defineComponent, onBeforeMount, reactive } from 'vue'


type MyState = {
    title: String,
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
          title: '',
          editable: true
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
          ...state,
          handleEditableChange,
          handleClickoutSide
      }
  }
});
</script>

<style lang="less">
@import './index.less';
</style>