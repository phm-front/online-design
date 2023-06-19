<template>
  <div class="components-list-wrap">
    <ATabs
      v-model:componentType="componentType"
      centered
      @change="handleTabsChange"
    >
      <ATabPane
        v-for="tab in tabsArr"
        :key="tab.key"
      >
        <template #tab>
          <component :is="tab.icon"></component>
          {{ tab.label }}
        </template>
        <div
          class="component-list"
          :class="{ 'image-list': componentType === 'image' }"
        >
          <!-- 上传图片按钮 -->
          <a-upload
            v-if="componentType === 'image'"
            v-model:file-list="fileList"
            name="file"
            action="https://api.imooc-lego.com/api/utils/upload-img"
            @change="handleChange"
          >
            <a-button type="primary" style="width: 220px;margin: 0 20px;">
              <upload-outlined></upload-outlined>
              上传图片
            </a-button>
          </a-upload>
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
import { UploadOutlined } from '@ant-design/icons-vue';

import {
  textDefaultTemplate,
  imageDefaultTemplate,
  shapeDefaultTemplate
} from '@/const/componentList';
import { useCanvasStore } from '@/stores/canvas';

import type { AllComponentType } from 'online-design-ui';
import type { UploadChangeParam } from 'ant-design-vue';

const { addComponent } = useCanvasStore();
const componentType = ref('text')
const fileList = ref([]);
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
      return 'HPicture'
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

// tabs切换
const handleTabsChange = (key: any) => {
  componentType.value = key
}
// 组件列表点击事件
const handleClick = (info: AllComponentType) => {
  addComponent(curComponent.value, {...info})
}
// 图片上传
const handleChange = (info: UploadChangeParam) => {
  console.log('handleChange', info)
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
.image-list {
  flex-direction: row;
  flex-wrap: wrap;
  .component-wrapper {
    margin: 16px 15px 0;
  }
}
.component-wrapper {
  cursor: pointer;
}
.list-item {
  position: relative!important;
}
</style>
