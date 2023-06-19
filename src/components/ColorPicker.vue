<template>
  <div class="color-picker">
    <input
      :value="value"
      type="color"
      class="color-input"
      @input="handleColorPicker"
    >
    <div class="common-use">
      <div
        class="color-item"
        v-for="item in commonUseColors"
        :key="item"
        :style="{ backgroundColor: item }"
        :class="{ transparent: !item }"
        @click="handleColorClick(item)"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: 'ColorPicker' });
defineProps({
  value: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  (e: 'change', value: string): void
}>();

const commonUseColors = [
  '#ffffff',
  '#f5222d',
  '#fa541c',
  '#fadb14',
  '#52c41a',
  '#1890ff',
  '#722ed1',
  '#8c8c8c',
  '#000000',
  ''
]

// input color change
const handleColorPicker = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('change', target.value);
}
// 常用颜色点击
const handleColorClick = (color: string) => {
  emit('change', color);
}
</script>
<style scoped lang="scss">
.color-picker {
  display: flex;
  .color-input {
    flex-shrink: 0;
    width: 40%;
    height: 50px;
    border: none;
    padding: 0;
    background-color: transparent;
    padding-right: 5px;
  }
  .common-use {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }
  .color-item {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    margin-right: 3px;
    margin-bottom: 6px;
    border-radius: 3px;
    cursor: pointer;
  }
  .transparent {
    background: url('@/assets/images/transparent.svg') no-repeat center center;
  }
}
</style>
