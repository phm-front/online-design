<template>
  <ALayoutContent>
    <div class="banner">
      <img src="@/assets/images/banner.png" alt="" />
    </div>
    <WelcomeRow />
    <div class="center-wrapper">
      <ContentTitle
        title="热门海报"
        description="只需替换文字和图片，一键自动生成H5"
      />
      <TemplateList :list="templateList" @useTemplate="useTemplate" />
    </div>
  </ALayoutContent>
</template>
<script setup lang="ts">
import WelcomeRow from './components/WelcomeRow.vue';
import type { Template } from '@/components/templateList/type';

import { useTemplateListStore } from '@/stores/templateList';

const router = useRouter();
const templateListStore = useTemplateListStore();

const templateList = toRef(templateListStore, 'templateList');

// 使用模版
const useTemplate = (templateInfo: Template) => {
  router.push({
    name: 'template',
    params: {
      id: templateInfo.id
    }
  });
};
</script>
<style scoped lang="scss">
.banner {
  height: 450px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.welcome-container {
  height: 174px;
  background-color: #f2f2f2;
}
</style>
