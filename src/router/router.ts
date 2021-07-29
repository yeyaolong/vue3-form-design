import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import QuestionGenerator from '../questionGenerator/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'QuestionGenerator',
        component: QuestionGenerator
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;