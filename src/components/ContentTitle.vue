<template>
  <div class="content-title">
    <div class="title">{{ title }}</div>
    <div v-if="description" class="description">
      {{ description }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});
</script>
<style scoped lang="scss">
@mixin content {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  height: 1px;
  width: 60px;
  background-color: #d8d8d8;
}
.content-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  .title {
    position: relative;
    font-size: 22px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
    &::before {
      @include content;
      left: -80px;
    }
    &::after {
      @include content;
      right: -80px;
    }
  }
  .description {
    font-size: 16px;
    color: #666;
  }
}
</style>
