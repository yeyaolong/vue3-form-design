<template>
    <div class="question-container"
      :class="['question-container', state.editable ? 'edit' : '']" 
      v-clickoutside="handleClickoutSide"
      @click="handleEditableChange"
    >
        <div v-show="state.editable" class="question-type">
          <!-- 题目类型 -->

        </div>
        <div class="question-content" v-show="state.editable">
          <div class="empty">

          </div>
          <div class="delete" title="删除" @click="handleDelete">
            <img src="../../image/deleteIcon.png" />
          </div>
          <div class="more-operation" @click="handleMoreOperation">
            <!-- 更多操作内容，暂不开发 -->
            <!-- 这里应该是一个自定义下拉框组件 -->
            <span>...</span>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Clickoutside from '../../../directives/clickoutside/index';

type MyState = {
  editable: boolean
}

export default defineComponent({
  name: 'QuestionContainer',
  directives: {
    Clickoutside
  },
  props: {
    questionIndex: {
      type: Number,
      default: 1
    },
    question: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props, ctx) {
    let state: MyState = reactive({
      editable: false
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