import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { TextPropsType } from '@/common/h-text/hText';

export interface ComponentData {
  id: string;
  name: string;
  props: Record<string, any>;
}

const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'h-text', props: { text: 'hello', fontSize: '30px', tag: 'div', color: 'red' } },
  { id: uuidv4(), name: 'h-text', props: { text: 'world', fontSize: '14px', tag: 'div' } },
  { id: uuidv4(), name: 'h-text', props: { text: '!', fontSize: '18px', tag: 'div' } }
];

export const useCanvasStore = defineStore('canvas', () => {
  const components = ref<ComponentData[]>(testComponents);
  const currentElement = ref('');
  const addComponent = (name: string, props: TextPropsType) => {
    components.value.push({
      id: uuidv4(),
      name,
      props
    });
  }
  return {
    components,
    currentElement,
    addComponent
  };
});
