<template>
    <div class="question-generator">
        <div class="left-side-content">
            <left-side
                @addQuestion="handleAddQuestion"
            ></left-side>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from 'vue';
import LeftSide from './questions/leftAside/leftSide.vue';
import { QuestionNameSpace } from '../type/questionGenerator/question';

type MyState = {
    questionList: Array<QuestionNameSpace.QuestionType>
}

export default defineComponent({
    name: 'QuestionGenerator',
    props: {},
    components: {
        LeftSide
    },
    setup(props, ctx) {

        let state: MyState = reactive({
            questionList: [],
        });
        
        /**
         * 根据id获取题目列表
         */
        const getQuestionList = function(id: Number) {

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

        return {
            handleAddQuestion
        }
    }
})
</script>

<style lang="less">
@import './index.less';
</style>