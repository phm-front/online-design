import type { App } from 'vue';
import ColorPicker from '@/components/ColorPicker.vue';
const globalComponents = [
  ColorPicker
];
export default {
  // 注册全局组件
  install: (app: App) => {
    globalComponents.forEach(component => {
      app.component(component.name!, component);
    });
  }
}