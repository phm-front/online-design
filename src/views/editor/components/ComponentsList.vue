<template>
  <div class="components-list-wrap">
    <ATabs v-model:componentType="componentType" centered>
      <ATabPane
        v-for="tab in tabsArr"
        :key="tab.key">
        <template #tab>
          <component :is="tab.icon"></component>
          {{ tab.label }}
        </template>
        <div class="component-list">
          <div
            class="component-wrapper"
            v-for="(info, index) in curTemplates"
            :key="index"
            @click="handleClick(info)"
          >
            <component class="list-item" :is="curComponent" v-bind="info"></component>
          </div>
        </div>
      </ATabPane>
    </ATabs>
  </div>
</template>
<script setup lang="ts">
import TextTabIcon from '@/components/svg/TextTabIcon.vue';
import ImageTabIcon from '@/components/svg/ImageTabIcon.vue';
import ShapeTabIcon from '@/components/svg/ShapeTabIcon.vue';

import {
  textDefaultTemplate,
  imageDefaultTemplate,
  shapeDefaultTemplate
} from '@/const/componentList';
import { useCanvasStore } from '@/stores/canvas';

import type { TextPropsType } from '@/common/h-text/hText';

const { addComponent } = useCanvasStore();
const componentType = ref('text')
const tabsArr = [
  { icon: TextTabIcon, key: 'text', label: '文本' },
  { icon: ImageTabIcon, key: 'image', label: '图片' },
  { icon: ShapeTabIcon, key: 'shape', label: '形状' }
]

const curComponent = computed(() => {
  switch (componentType.value) {
    case 'text':
      return 'HText'
    case 'image':
      return 'HImage'
    case 'shape':
      return 'HShape'
    default:
      return 'HText'
  }
})
const curTemplates = computed(() => {
  switch (componentType.value) {
    case 'text':
      return textDefaultTemplate
    case 'image':
      return imageDefaultTemplate
    case 'shape':
      return shapeDefaultTemplate
    default:
      return []
  }
})

// 组件列表点击事件
const handleClick = (info: TextPropsType) => {
  addComponent(curComponent.value, info)
}
</script>
<style scoped lang="scss">
.components-list-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}
:deep(.ant-tabs-tab) {
  margin: 0!important;
  padding: 12px 16px;
  .ant-tabs-tab-btn {
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
  }
}
:deep(.ant-tabs) {
  display: flex;
  flex-direction: column;
  height: 100%;
  .ant-tabs-content-holder {
    flex: 1;
    overflow-y: auto;
  }
}
.component-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.component-wrapper {
  cursor: pointer;
}
.list-item {
  position: relative!important;
}
</style>
