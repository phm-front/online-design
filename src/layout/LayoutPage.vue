<template>
  <ALayout>
    <LayoutHeader />
    <LayoutContent />
    <LayoutFooter />
  </ALayout>
</template>
<script setup lang="ts">
import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>
<style scoped lang="scss">
.ant-layout-content {
  background-color: #fff;
}
</style>
