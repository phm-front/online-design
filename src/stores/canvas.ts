import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { AllComponentType, AllComponentTypeKeys } from 'online-design-ui';

export interface ComponentData {
  id: string;
  name: string;
  props: AllComponentType;
}

export const useCanvasStore = defineStore('canvas', () => {
  const components = ref<ComponentData[]>([]);
  const currentElementId = ref('');

  const currentComponent = computed(() => {
    return components.value.find((item) => item.id === currentElementId.value);
  })

  // 添加组件
  const addComponent = (name: string, props: AllComponentType) => {
    components.value.push({
      id: uuidv4(),
      name,
      props
    });
  }
  // 设置当前选中的组件
  const setCurrentElementId = (id: string) => {
    currentElementId.value = id;
  }
  // 设置当前组件修改的属性值
  const setComponentProps = <T extends AllComponentTypeKeys>(prop: T, value: any) => {
    if (currentComponent.value) {
      currentComponent.value.props[prop] = value;
    }
  }
  return {
    components,
    currentElementId,
    currentComponent,
    addComponent,
    setCurrentElementId,
    setComponentProps
  };
});
