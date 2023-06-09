<template>
  <div :class="['edit-wrapper', active ? 'active' : '']" @click="handleWrapperClick">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits<{
  (e: 'set-active', id: string): void
}>()
const handleWrapperClick = () => {
  emit('set-active', props.id);
}
</script>
<style scoped lang="scss">
.edit-wrapper {
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}
.edit-wrapper.active {
  border-color: #1890ff;
}
</style>
