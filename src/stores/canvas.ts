import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export interface ComponentData {
  id: string;
  name: string;
  props: Record<string, any>;
}

const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'h-text', props: { text: 'hello' } },
  { id: uuidv4(), name: 'h-text', props: { text: 'world' } },
  { id: uuidv4(), name: 'h-text', props: { text: '!' } },
]

export const useCanvasStore = defineStore('canvas', () => {
  const components = ref<ComponentData[]>(testComponents);
  const currentElement = ref('');
  return {
    components,
    currentElement
  }
});
