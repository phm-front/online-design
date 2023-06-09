import type { App } from 'vue';
import registryComponentPlugin from './registryGlobalComponents';
import registryAntdUiPlugin from './registryAntdUi';

const plugins = [
  registryComponentPlugin,
  registryAntdUiPlugin
];
export default {
  install: (app: App) => {
    plugins.forEach(plugin => {
      app.use(plugin);
    });
  }
}
