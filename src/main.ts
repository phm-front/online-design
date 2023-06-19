import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import plugins from './plugins';
import designUi from 'online-design-ui';
import '@/assets/css/common.scss';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(plugins);
app.use(designUi);

app.mount('#app');
