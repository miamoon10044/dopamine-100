<script setup>
import Navigation from './Navigation/Navigation.vue';
import UserInfo from './UserInfo/UserInfo.vue';
</script>

<template>
  <div class="max-w-custom-container px-3 mx-auto">
    <header class="flex justify-between py-4">
      <div>
        <img src="../../assets/logo.png" alt="Dopamine 100 Logo" />
      </div>
      <ul class="flex justify-center items-center gap-[30px]">
        <li><a href="#">Game Rules</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">DP ads</a></li>
      </ul>
    </header>

    <div
      class="flex justify-between items-center px-[40px] py-[12px] rounded-[20px] bg-white"
    >
      <Navigation />
      <UserInfo />
    </div>
  </div>
</template>

<style scoped>
header {
  font-size: 13px;
}

header a {
  color: #474747; /* TODO: Transfer to themes */
}
</style>
