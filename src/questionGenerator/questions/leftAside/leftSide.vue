<template>
    <div class="left-side">
        <div>
            <div class="title">添加题目</div>
            <div class="question-type-list">
                <div v-for="item in questionTypeList" :key="item.id" class="question-type" @click="handleClick(item)">
                    <img :src="item.icon" />
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch, PropType, onMounted } from 'vue';
import { QuestionNameSpace } from '@type/questionGenerator/question';

type QuestionTypeList = {
    [key: string]:  QuestionNameSpace.QuestionType
}

type MyProps = {
    questionTypeList: QuestionTypeList
    // questionTypeList: any
}

export default defineComponent({
    name: 'LeftSide',
    props: {
        questionTypeList: {
            type: Object as PropType<QuestionTypeList>,
            // type: Object, // 可以运行
            // type: {} as PropType<QuestionTypeList>, // 错误写法
            
            default() {
                return {}
            }
        }
    },
    setup(props: MyProps, ctx) {
        const handleClick = function(item: QuestionNameSpace.QuestionType) {
            ctx.emit('addQuestion', item);
        }

        return {
            handleClick
        }
    }
});
</script>

<style lang="less">
@import './leftSide.less';
</style>