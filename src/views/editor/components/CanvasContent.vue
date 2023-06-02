<template>
  <div class="canvas-wrapper">
    <div class="operate-row">
      <span>画布区域</span>
      <div class="rigit-btns">btns</div>
    </div>
    <div class="canvas-content">
      <div v-for="component in components" :key="component.id">
        {{ component.name }}
        <HText />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCanvasStore } from '@/stores/canvas';
const canvasStore = useCanvasStore();
const { components } = toRefs(canvasStore);
</script>
<style scoped lang="scss">
.canvas-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  height: 100%;
}
.operate-row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.canvas-content {
  position: fixed;
  min-width: 375px;
  min-height: 200px;
  max-height: 80vh;
  margin-top: 20px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
