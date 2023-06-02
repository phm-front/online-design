import type { App } from 'vue';
import registryComponentPlugin from './registryGlobalComponents';

const plugins = [
  registryComponentPlugin
];
export default {
  install: (app: App) => {
    plugins.forEach(plugin => {
      app.use(plugin);
    });
  }
}
