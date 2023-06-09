import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { AllComponentType } from '@/common/utils/commonTypes';

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
  return {
    components,
    currentElementId,
    currentComponent,
    addComponent,
    setCurrentElementId
  };
});
