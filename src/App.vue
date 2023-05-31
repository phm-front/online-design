<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const { count, increment } = toRefs(useCounterStore());
</script>

<template>
  <header>
    <p>{{ count }}</p>
    <AButton @click="increment">increment</AButton>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
