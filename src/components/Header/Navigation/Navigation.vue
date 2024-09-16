<script setup></script>

<template>
  <nav class="flex items-center gap-[30px]">
    <RouterLink to="/">
      <img src="../../../assets/icons/icon-home.png" alt="" />
      Lobby
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-webtoon.png" alt="" />
      Webtoon
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-stars.png" alt="" />
      Games
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-chat.png" alt="" />
      Community
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-diamond.png" alt="" />
      Store
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-question.png" alt="" />
      Customer
    </RouterLink>
  </nav>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #474747; /* TODO: Transfer to themes */
  font-size: 13px;
}
</style>
