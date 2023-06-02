<template>
  <div class="template-list-wrap">
    <div
      class="template-item"
      v-for="item in list"
      :key="item.id"
      :style="{ backgroundImage: `url(${item.url}) ` }"
    >
      <div class="placeholder"></div>
      <div class="mask">
        <AButton
          type="primary"
          shape="round"
          size="large"
          @click="useCurrentTemplate(item)"
          >使用该模板创建</AButton
        >
      </div>
      <div class="template-name">{{ item.name }}</div>
      <div class="description-info">
        <div class="author-name">
          <span>作者：</span>
          <span>{{ item.author }}</span>
        </div>
        <div class="used-info">
          <UserOutlined />
          <span class="used-number">{{ item.usedNumber }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import type { Template } from './type';
defineProps({
  list: {
    type: Array as PropType<Template[]>,
    required: true
  }
});
const emit = defineEmits<{
  (e: 'useTemplate', templateInfo: Template): void;
}>();
// 使用当前模板
const useCurrentTemplate = (templateInfo: Template) => {
  emit('useTemplate', templateInfo);
};
</script>
<style scoped lang="scss">
.template-list-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
.template-item {
  position: relative;
  width: calc(25% - 16px);
  margin: 0 8px;
  background-size: 100%;
  margin-bottom: 16px;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f,
    0 5px 12px 4px #00000017;
  .placeholder {
    height: 390px;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: none;
    height: 390px;
    background-color: rgba(0, 0, 0, 0.6);
    .ant-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
    }
  }
  &:hover {
    .mask {
      display: block;
    }
  }
  .template-name {
    height: 46px;
    line-height: 46px;
    padding: 0 12px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }
  .description-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background-color: #fff;
    padding: 0 12px;
    color: #999;
  }
  .used-number {
    margin-left: 4px;
    font-weight: bold;
  }
}
</style>
