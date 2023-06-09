import type { App } from 'vue';
import {
  Input,
  Slider,
  InputNumber,
  Radio,
  Select
} from 'ant-design-vue';

export default {
  // 注册全局组件
  install: (app: App) => {
    const components = [
      Input,
      Slider,
      InputNumber,
      Radio,
      Select
    ];
    components.forEach(component => {
      app.use(component);
    });
  }
}