<script setup></script>

<template>
  <nav class="flex items-center gap-[30px]">
    <RouterLink to="/">
      <img src="../../../assets/icons/icon-home.png" alt="" />
      {{ $t('navigation.Lobby') }}
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-webtoon.png" alt="" />
      {{ $t('navigation.Webtoon') }}
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-stars.png" alt="" />
      {{ $t('navigation.Games') }}
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-chat.png" alt="" />
      {{ $t('navigation.Community') }}
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-diamond.png" alt="" />
      {{ $t('navigation.Store') }}
    </RouterLink>
    <RouterLink to="/about">
      <img src="../../../assets/icons/icon-question.png" alt="" />
      {{ $t('navigation.Customer') }}
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
