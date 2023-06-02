import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import '@/assets/css/common.scss';
import 'ant-design-vue/es/modal/style/css';
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
