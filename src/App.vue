<script setup>
import Header from './components/Header/Header.vue';
</script>

<template>
  <Header />

  <main class="max-w-custom-container px-3 mx-auto py-6">
    <RouterView />
  </main>
</template>

<style scoped></style>
