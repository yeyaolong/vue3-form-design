import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/router";
import { useMock } from './RequestUtil/mock/mock';
// import Clickoutside from 'element-plus/packages/directives/click-outside/index';

// if (process.env.NODE_ENV === 'development') {
//     useMock();
// }


const app = createApp(App);

// app.directive('clickoutside', Clickoutside);

app.use(router);

app.mount('#app')
