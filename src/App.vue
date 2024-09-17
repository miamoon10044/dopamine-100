<script setup>
import Header from './components/Header/Header.vue';
</script>

<template>
  <Header />

  <main class="max-w-custom-container min-w-[1200px] px-3 mx-auto py-6">
    <RouterView />

    <!-- <div class="fixed top-[15%] right-0 h-[40px] w-[40px] bg-pink rounded-lg">
      <img src="/src/assets/icons/icon-container.png" alt="" />
    </div> -->
  </main>
</template>

<style scoped></style>
