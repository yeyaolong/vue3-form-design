import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/router";


const app = createApp(App);

// app.directive('clickoutside', Clickoutside);

app.use(router);

app.mount('#app')
