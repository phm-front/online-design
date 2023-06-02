import type { App } from 'vue';
interface Modules {
  [key: string]: () => Promise<{ default: Component }>
}
export default {
  // 注册全局组件
  install: (app: App) => {
    const modules = import.meta.glob('@/common/**/*.vue') as Modules;
    Object.keys(modules).forEach(key => {
      modules[key]().then(res => {
        if (res.default.name) {
          app.component(res.default.name!, res.default)
        }
      })
    });
  }
}