<template>
  <div class="props-table">
    <div
      v-for="(value, key) in finalProps"
      :key="key"
      class="props-table-item"
    >
      <div class="item-label" v-if="value!.label">
        {{ value.label }}
      </div>
      <div class="item-content">
        <component
          :is="value.component"
          :[value.valuePropName!]="value.value"
          v-bind="value.extraProps || {}"
          @[value.eventName!]="handleValueChange($event, key, value.resultTransform)"
        >
          <template v-if="value.options && value.options.length">
            <component
              v-for="option in value.options || []"
              :key="option.value"
              :is="value.subComponent!"
              :value="option.value"
            >
              {{ option.label }}
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { textPropsFromMap } from '@/common/h-text/hText';
import type {
  AllComponentType,
  AllComponentTypeKeys,
  PropsToFormCommon
} from '@/common/utils/commonTypes';
import { reduce } from 'lodash-es';
import { useCanvasStore } from '@/stores/canvas';
const props = defineProps({
  props: {
    type: Object as PropType<AllComponentType>,
    required: true
  }
});

const { setComponentProps } = useCanvasStore();

const finalProps = computed(() => {
  return reduce(
    props.props,
    (result, value, key) => {
      if (
        Object.prototype.hasOwnProperty.call(textPropsFromMap, key)
      ) {
        const propValue =
          textPropsFromMap[key as AllComponentTypeKeys]!;
        result[key as AllComponentTypeKeys] = Object.assign(
          {
            value: propValue.initialTransform
              ? propValue.initialTransform(value)
              : value,
            valuePropName: propValue.valuePropName || 'value',
            eventName: propValue.eventName || 'change',
          },
          propValue
        );
      }
      return result;
    },
    {} as Required<PropsToFormCommon>
  );
});

const handleValueChange = (val: any, key: AllComponentTypeKeys, transform: ((value: any) => any) | undefined) => {
  console.log(val, key)
  const result = transform ? transform(val) : val;
  setComponentProps(key, result);
} 
</script>
<style scoped lang="scss">
.props-table-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 10px;
  .item-label {
    width: 74px;
    flex-shrink: 0;
  }
  .item-content {
    flex: 1;
  }
}
</style>
