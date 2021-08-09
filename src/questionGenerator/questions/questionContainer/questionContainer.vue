<template>
    <div
      :class="['question-container', state.editable ? 'edit' : '']" 
      @click="handleEditableChange"
      v-clickoutside="handleClickoutSide"
    >
        <div v-show="state.editable" class="question-type">
          <!-- 题目类型 -->
          {{ question.typeName }}
        </div>
        <div class="question-content">
          <radio-question
            v-if="question.type === 'radio' && question.subtype === 'radio'"
            :editable="state.editable"
            :question-index="questionIndex"
            :question="question"
          ></radio-question>
          <div class="question-foot"  v-show="state.editable">
            <span>{{ question.subtypeName }}</span>
            |
            <div class="empty">
              <label for="noEmpty">必填</label><input type="checkbox" id="noEmpty"/>
            </div>
            <div class="delete" title="删除" @click="handleDelete">
              <img src="@assets/icon/删除.png" />
            </div>
            <div class="more-operation" @click="handleMoreOperation">
              <!-- 更多操作内容，暂不开发 -->
              <!-- 这里应该是一个自定义下拉框组件 -->
              <span>...</span>
            </div>
          </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue'
import Clickoutside from '@directives/clickoutside/index';
// import { QuestionNameSpace } from '../../../type/questionGenerator/question';
import RadioQuestion from '../radioQuestion/radioQuestion.vue';

type QuestionTypeList = {
    [key: string]:  QuestionNameSpace.QuestionType
}

type MyState = {
  editable: boolean
}

type MyProps = {
  questionTypeList: QuestionTypeList,
  question: QuestionNameSpace.Question,
  questionIndex: number
}

export default defineComponent({
  name: 'QuestionContainer',
  components: {
    RadioQuestion
  },
  directives: {
    Clickoutside
  },
  props: {
    questionIndex: {
      type: Number,
      default: 1
    },
    question: {
      type: Object as PropType<QuestionNameSpace.Question>,
      default() {
        return {}
      }
    },
    questionTypeList: {
      type: Object as PropType<QuestionTypeList>,
      default() {
        return {}
      }
    }
  },
  setup(props: MyProps, ctx) {
    let state: MyState = reactive({
      editable: true
    });
    /**
     * 触发click事件 开始编辑题目
     */
    const handleEditableChange = function() {
      state.editable = true;
    }
    /**
     * 触发clickoutside 停止编辑题目
     */
    const handleClickoutSide = function() {
      state.editable = false;
    }

    /**
     * 删除题目
     */
    const handleDelete = function() {
      ctx.emit('delete', props.question, props.questionIndex)
    }
    /**
     * 对题目的更多操作
     */
    const handleMoreOperation = function() {

    }



    return {
      state,
      handleEditableChange,
      handleClickoutSide,
      handleDelete,
      handleMoreOperation
    }
  }
  
});
</script>

<style lang="less">
@import './questionContainer.less';
</style>