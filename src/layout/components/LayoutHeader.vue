<template>
  <ALayoutHeader>
    <RouterLink to="/" class="logo" title="figma">
      <LogoIcon style="font-size: 25px;" />
      <span>figma</span>
    </RouterLink>
    <div class="right-wrap">
      right
    </div>
  </ALayoutHeader>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const name = toRef(route, 'name')
console.log(name)
</script>
<style scoped lang="scss">
.ant-layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.logo {
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    margin-left: 4px;
  }
}
</style>
