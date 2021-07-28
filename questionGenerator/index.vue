<template>
    <div class="question-generator">
        <div class="left-side-content">
            <left-side></left-side>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, watch } from 'vue';
import LeftSide from './questions/leftAside/leftSide.vue';

export default defineComponent({
    name: 'QuestionGenerator',
    props: {},
    components: {
        LeftSide
    },
    setup(props, ctx) {

    }
})
</script>

<style lang="less">
@import './index.less';
</style>