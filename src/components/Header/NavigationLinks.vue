<template>
  <ul class="flex justify-center items-center gap-[30px]">
    <li>
      <a href="#">{{ $t('header.Game_Rules') }}</a>
    </li>
    <li>
      <a href="#">{{ $t('header.FAQ') }}</a>
    </li>
    <li>
      <a href="#">{{ $t('header.DP_Ads') }}</a>
    </li>
    <li>
      <router-link to="/login">{{ $t('header.Login') }}</router-link>
    </li>
    <li>
      <router-link to="/signup">{{ $t('header.Register') }}</router-link>
    </li>
  </ul>
</template>
