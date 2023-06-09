<template>
  <ALayout style="height: 100%;">
    <LayoutHeader style="background-color: #001529;">
      <template #logo-right>
        <AInput v-model="workName" />
      </template>
    </LayoutHeader>
    <ALayout>
      <ALayoutSider width="300px" class="editor-aside">
        <ComponentsList />
      </ALayoutSider>
      <ALayoutContent style="padding-top: 64px;">
        <CanvasContent />
      </ALayoutContent>
      <ALayoutSider width="300px" class="editor-aside">
        <PropsForm />
      </ALayoutSider>
    </ALayout>
  </ALayout>
</template>
<script setup lang="ts">
import LayoutHeader from '@/layout/components/LayoutHeader.vue';
import CanvasContent from './components/CanvasContent.vue';
import ComponentsList from './components/ComponentsList.vue';
import PropsForm from './components/PropsForm.vue';
const workName = ref('')
</script>
<style scoped lang="scss">
.editor-aside {
  background-color: #fff;
  padding-top: 64px;
}
</style>
