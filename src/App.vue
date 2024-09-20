<script setup>
import Header from './components/Header/Header.vue';
import SelectAgent from './components/Popups/SelectAgent.vue';
</script>

<template>
  <Header />

  <main class="max-w-custom-container min-w-[1200px] px-3 mx-auto py-6">
    <RouterView />
  </main>

  <SelectAgent />
</template>

<style scoped></style>
