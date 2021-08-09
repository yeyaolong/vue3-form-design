<template>
    <div class="question-generator">
        <div class="left-side-content">
            <left-side
                :question-type-list="state.questionTypeList"
                @addQuestion="handleAddQuestion"
            ></left-side>
        </div>
        <div class="question-list-container">
            <question-title
                :questionaire-title="state.questionTitle"
            ></question-title>
            <question-description
                @change="handleDescriptionChange"
                :description="state.questionDescription"
                :cols="20"
            ></question-description>
            <div class="question-container-list">
                <question-container
                    v-for="(item, index) in state.questionList"
                    :key="index"
                    :question="item"
                    :question-type-list="state.questionTypeList"
                    :question-index="index"
                    @delete="handleDeleteQuestion"
                >
                </question-container>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from 'vue';
import LeftSide from './questions/leftAside/leftSide.vue';
import QuestionTitle from './questionTitle/index.vue';
import QuestionDescription from './questionDescription/questionDescription.vue';
import QuestionContainer from './questions/questionContainer/questionContainer.vue';
// 图片icon
import inputQuestionImg from '@assets/icon/填空题.png';
import radioQuestionImg from '@assets/icon/单选题.png';

type QuestionTypeList = {
    [key: string]:  QuestionNameSpace.QuestionType
}

type MyState = {
    questionTitle: string,
    questionDescription: string,
    questionTypeList: QuestionTypeList,
    questionList: Array<QuestionNameSpace.Question | QuestionNameSpace.RadioQuestion | QuestionNameSpace.InputQuestion>,
    loading: boolean
}

export default defineComponent({
    name: 'QuestionGenerator',
    props: {},
    components: {
        LeftSide,
        QuestionTitle,
        QuestionDescription,
        QuestionContainer
    },
    setup(props, ctx) {

        let state: MyState = reactive({
            questionTitle: '中高风险地区旅居情况摸排', // 问卷标题
            questionDescription: '1. 紧急摸排自6月起停留、途径南京禄口机场、湖南省张家界景区的居民；\r\n2. 请各单位与x月x日前完成填写；\r\n3. 有旅居记录人员如出现发热、腹泻、嗅觉丧失等情况，请联系网格员吴xx  13799099000', // 问卷描述
            questionTypeList: {}, // 可用得题目类型列表
            questionList: [],
            loading: false,
        });
        
        /**
         * 根据id获取题目列表
         */
        const getQuestionTypeList = function() {
            state.questionTypeList = {
                'input': {
                    id: 1,
                    name: '填空题',
                    icon: inputQuestionImg,
                    type: 'input',
                    deletable: true, // 是否可以删除
                    empty: false, // false 必填 true 非必填
                    subtypeList: [
                        {
                            name: '单行填空',
                            value: '1'
                        },
                        {
                            name: '多行填空',
                            value: '2'
                        },
                        {
                            name: '电子签名',
                            value: '3'
                        },
                        {
                            name: '手机号',
                            value: '4'
                        },
                        {
                            name: '数字',
                            value: '5'
                        },
                        {
                            name: '地址',
                            value: '6'
                        },
                        {
                            name: '日期',
                            value: '7'
                        },
                        {
                            name: '时间',
                            value: '8'
                        },
                        {
                            name: '扫码输入',
                            value: '9'
                        }
                    ], // 二级类型列表
                },
                'radio': {
                    id: 2,
                    name: '单选题',
                    icon: radioQuestionImg,
                    type: 'radio',
                    deletable: true, // 是否可以删除
                    empty: false, // false 必填 true 非必填
                    subtypeList: [
                        {
                            name: '单选题',
                            value: '1'
                        },
                        {
                            name: '多选题',
                            value: '2'
                        },
                        {
                            name: '下拉框',
                            value: '3'
                        },
                        {
                            name: '多段选择',
                            value: '4'
                        }
                    ], // 二级类型列表
                }
            }
        }

        getQuestionTypeList();
        /**
         * 修改问卷描述
         */
        const handleDescriptionChange = function(questionDescription: string): void {
            state.questionDescription = questionDescription;
        }

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
        /**
         * 删除题目
         */
        const handleDeleteQuestion = function(question: any, questionIndex: number): void {
            state.questionList.splice(questionIndex, 1);
        }

        const initQuestionaire = function() {
            state.questionList = [];
            state.loading = true;
            setTimeout(() => {
                state.questionList = [
                    {
                        typeName: '单选题',
                        type: 'radio', // 一级类型
                        subtype: 'radio',
                        subtypeName: '单选题',// 二级类型
                        title: '',
                        selectList: [
                            {
                                name: '男',
                                value: 'male'
                            },
                            {
                                name: '女',
                                value: 'female'
                            }
                        ],
                        deletable: true,
                        empty: false
                    }
                ]
            }, 1500)

        }

        initQuestionaire()

        return {
            state,
            handleDescriptionChange,
            handleAddQuestion,
            handleDeleteQuestion,
        }
    }
})
</script>

<style lang="less">
@import './index.less';
</style>