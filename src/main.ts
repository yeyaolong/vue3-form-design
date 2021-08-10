import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/router";
import { useMock } from './RequestUtil/mock/mock';

// console.log('process', process);
// console.log('import.meta.env', import.meta.env)

if (import.meta.env.MODE === 'development') {
    useMock();
}


const app = createApp(App);

// app.directive('clickoutside', Clickoutside);

app.use(router);

app.mount('#app')
