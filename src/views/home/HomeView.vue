<template>
  <ALayoutContent>
    <div class="banner">
      <img src="@/assets/images/banner.png" alt="" />
    </div>
    <WelcomeRow />
    <div class="center-wrapper">
      <ContentTitle title="热门海报" description="只需替换文字和图片，一键自动生成H5" />
      <TemplateList :list="templateList" />
    </div>
  </ALayoutContent>
</template>
<script setup lang="ts">
import WelcomeRow from './components/WelcomeRow.vue';
import type { Template } from '@/components/templateList/type';

let templateList = ref<Template[]>([]);
templateList.value = Array.from({ length: 6}).map((_, i) => ({
  id: i,
  url: 'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
  name: '前端架构师直播海报',
  author: 'xiaoli',
  tags: ['hot'],
  usedNumber: 999
}))
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
