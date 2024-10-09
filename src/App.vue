<script setup>
import Header from './components/Header/Header.vue';
import SelectAgent from './components/Popups/SelectAgent.vue';
import Navigation from './components/Header/Navigation/Navigation.vue';
import UserInfo from './components/Header/UserInfo/UserInfo.vue';
</script>

<template>
  <div class="max-w-custom-container min-w-[1200px] px-3 mx-auto">
    <Header />
    <div
      class="flex justify-between items-center px-[40px] py-[12px] rounded-[20px] bg-white">
      <Navigation />
      <UserInfo />
    </div>

    <main class="max-w-custom-container min-w-[1200px] px-3 mx-auto py-6">
      <RouterView />
    </main>
  </div>

  <SelectAgent />
</template>

<style scoped></style>
