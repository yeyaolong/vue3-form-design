<template>
    <div class="question-generator">
        <div class="left-side-content">
            <left-side
                :question-type-list="questionTypeList"
                @addQuestion="handleAddQuestion"
            ></left-side>
        </div>
        <div class="question-list-container">
            <question-title></question-title>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from 'vue';
import LeftSide from './questions/leftAside/leftSide.vue';
import QuestionTitle from './questionTitle/index.vue';
import { QuestionNameSpace } from '../../type/questionGenerator/question';

type MyState = {
    questionTypeList: Array<QuestionNameSpace.QuestionType>
}

export default defineComponent({
    name: 'QuestionGenerator',
    props: {},
    components: {
        LeftSide,
        QuestionTitle
    },
    setup(props, ctx) {

        let state: MyState = reactive({
            questionTypeList: []
        });
        
        /**
         * 根据id获取题目列表
         */
        const getQuestionTypeList = function() {
            state.questionTypeList = [
                {
                    id: 1,
                    name: '填空题',
                    icon: '',
                    type: 'input',
                    operation: [
                        {
                        name: '添加文件/图片(标题)'
                        },
                        {
                        name: '添加题目说明'
                        },
                        {
                        name: '将此标题添加为常用题'
                        },
                        {
                        name: '复制题目'
                        }
                    ], // 更多操作
                    deletable: true, // 是否可以删除
                    empty: false, // false 必填 true 非必填
                    typeList: [
                        {
                        name: '单行填空'
                        },
                        {
                        name: '多行填空'
                        },
                        {
                        name: '电子签名'
                        },
                        {
                        name: '手机号'
                        },
                        {
                        name: '数字'
                        },
                        {
                        name: '地址'
                        },
                        {
                        name: '日期'
                        },
                        {
                        name: '时间'
                        },
                        {
                        name: '扫码输入'
                        }
                    ], // 类型列表
                },
                {
                    id: 2,
                    name: '单选题',
                    icon: '',
                    type: 'radio',
                    operation: [
                        {
                        name: '添加文件/图片(标题)'
                        },
                        {
                        name: '添加题目说明'
                        },
                        {
                        name: '将此标题添加为常用题'
                        },
                        {
                        name: '复制题目'
                        }
                    ], // 更多操作
                    deletable: true, // 是否可以删除
                    empty: false, // false 必填 true 非必填
                    typeList: [
                        {
                        name: '单选题'
                        },
                        {
                        name: '多选题'
                        },
                        {
                        name: '下拉框'
                        },
                        {
                        name: '多段选择'
                        }
                    ], // 类型列表
                }
            ]
        }

        getQuestionTypeList();

        /**
         * 新增题目
         */
        const handleAddQuestion = function(item: QuestionNameSpace.QuestionType) {
            switch(item.type) {
                case 'input':
                    break;
                case 'radio':
                    break;
                default:
                    break;
            }
        }

        return {
            ...state,
            handleAddQuestion
        }
    }
})
</script>

<style lang="less">
@import './index.less';
</style>