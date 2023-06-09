<template>
  <PropsTable v-if="currentComponent" :props="currentComponent!.props" />
</template>
<script setup lang="ts">
import { useCanvasStore } from '@/stores/canvas';
import PropsTable from './PropsTable.vue';
const canvasStore = useCanvasStore();
const { currentComponent } = toRefs(canvasStore);
</script>
<style scoped lang="scss">

</style>
