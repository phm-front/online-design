<template>
  <div class="welcome-container">
    <div class="center-wrapper flex">
      <div
        class="welcome-item"
        v-for="item in welcomeList"
        :key="item.title"
      >
        <component :is="item.svg"></component>
        <h3>{{ item.title }}</h3>
        <div>{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import HTML5 from '@/components/svg/HTML5.vue';
import Build from '@/components/svg/Build.vue';
import Light from '@/components/svg/Light.vue';
const welcomeList = [
  {
    svg: HTML5,
    title: '专注H5 始终如一',
    description: '三年保持行业领先'
  },
  {
    svg: Build,
    title: '海量 H5 模版',
    description: '一键生成，一分钟轻松制作'
  },
  { svg: Light, title: '极致体验', description: '用户的一致选择' }
];
</script>
<style scoped lang="scss">
.flex {
  height: 100%;
}
.welcome-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  padding: 0 20px;
  svg {
    font-size: 60px;
  }
  h3 {
    font-size: 19px;
    margin: 5px 0;
  }
  div {
    font-size: 14px;
    color: #666;
  }
}
</style>
