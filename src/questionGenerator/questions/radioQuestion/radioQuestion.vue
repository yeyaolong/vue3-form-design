<template>
    <div class="radio-question">
        <div class="issue-title" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
            <span class="issue-index">{{ questionIndex + 1 }}.</span>
            <div class="issue-content">
                <textarea
                    v-show="editable"
                    v-model="state.questionInfo.title" 
                    :style="titleTextareaStyle"
                    placeholder="请输入问题"
                    autofocus
                ></textarea>
                <div v-show="!editable">{{ state.questionInfo.title }}</div>
            </div>
        </div>
        <div :class="['title-border', state.showTitleBorder ? '' : 'hidden']"></div>
        <div class="issue-result">
            <div class="select-option-list">
                <div v-for="(item, index) in state.questionInfo.selectList" :key="index" class="select-option">
                    <input type="radio" :disabled="true" />
                    <div class="radio-input-container">
                        <form-input v-model:value="item.name" type="text" :editable="editable" :disabled="false" placeholder="请输入">
                        </form-input>
                    </div>
                    <div v-show="editable" class="delete" title="删除" @click="handleDeleteOption(index)">
                        <img src="@assets/icon/删除.png" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 对选项的操作 -->
        <div v-show="editable" class="option-operation">
            <div class="text-btn" @click="handleAddOption">+ 选项</div>
            |
            <div class="text-btn" @click="handleAddOther">添加"其他"项</div>
            <!-- <div class="text-btn" @click="handleBatchEdit">批量编辑</div> -->
            <!-- |
            <div class="text-btn">设置选项名额</div>
            |
            <div class="text-btn">设置题目关联</div> -->
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, PropType, reactive, watch } from 'vue';
import FormInput from '@components/FormInput/FormInput.vue';

type MyState = {
    showTitleBorder: Boolean,
    questionInfo: QuestionNameSpace.RadioQuestion,
    // titleTextareaStyle: CSSStyleDeclaration,
    titleTextareaStyle: Partial<CSSStyleDeclaration> // 用不到所有的css属性，这里用Partial
}
type MyProps = {
    questionIndex: number,
    question: QuestionNameSpace.RadioQuestion,
    editable: Boolean
}

export default defineComponent({
  name: 'RadioQuestion',
  components: {
      FormInput
  },
  props: {
      questionIndex: {
          type: Number,
          default: 1
      },
      question: {
          type: Object as PropType<QuestionNameSpace.RadioQuestion>,
          default() {
              return {}
          }
      },
      editable: {
          type: Boolean,
          default: false
      }
  },
  setup(props: MyProps, ctx) {
    let state: MyState = reactive({
        showTitleBorder: false,
        questionInfo: {
            typeName: '单选题',
            type: 'radio',
            subtype: 'radio',
            subtypeName: '单选题',
            title: '请输入问题',
            deletable: true,
            empty: false,
            selectList: [
                // {
                //     name: '',
                //     value: ''
                // }
            ]
        },
        titleTextareaStyle: {
            maxHeight: '9.0072e+15px',
            height: '20px'
        }
    });

    const handleMouseOver = function() {
        console.log('handleMouseOver')
        state.showTitleBorder = true;
    }

    const handleMouseOut = function() {
        console.log('handleMouseOut')
        state.showTitleBorder = false;
    }
    /**
     * 添加选项
     */
    const handleAddOption = function() {
        state.questionInfo.selectList.push({
            name: '选项' + (state.questionInfo.selectList.length + 1),
            value: '选项' + (state.questionInfo.selectList.length + 1)
        });
    }
    /**
     * 添加"其他选项"
     */
    const handleAddOther = function() {
        console.log('尽情期待')
    }

    /**
     * 删除选项
     */
    const handleDeleteOption = function(index: number) {
        state.questionInfo.selectList.splice(index, 1);
    }

    watch(() => props.editable, (newVal, oldVal) => {
        if (newVal && state.questionInfo.title === '请输入问题') {
            state.questionInfo.title = '';
        }

        if (!newVal && state.questionInfo.title === '') {
            state.questionInfo.title = '请输入问题';
        }
    });

    return {
        state,
        handleMouseOver,
        handleMouseOut,
        handleAddOption,
        handleAddOther,
        handleDeleteOption
    }
  }
});
</script>

<style lang="less">
@import './radioQuestion.less';
</style>