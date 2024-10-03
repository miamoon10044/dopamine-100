<script setup>
import Navigation from './Navigation/Navigation.vue';
import UserInfo from './UserInfo/UserInfo.vue';

import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Access the locale object

const changeLocale = (language) => {
  console.log(language);
  locale.value = language; // Set the new locale
};
</script>

<template>
  <div class="max-w-custom-container min-w-[1200px] px-3 mx-auto">
    <header class="flex justify-between py-4">
      <div>
        <img src="../../assets/logo.png" alt="Dopamine 100 Logo" />
      </div>

      <div class="flex gap-5 items-center">
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
        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn m-1 text-xs min-h-0 min-w-0 h-auto w-auto px-4 py-2 bg-white rounded-xl">
            {{ $t(`header.${locale}`) }}
          </div>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box w-40 z-[1] p-3 shadow">
            <li @click="changeLocale('ja')"><a>🇯🇵 &nbsp; 日本語</a></li>
            <li @click="changeLocale('ko')"><a>🇰🇷 &nbsp; 한글</a></li>
            <li @click="changeLocale('en')"><a>🇺🇸 &nbsp; English</a></li>
          </ul>
        </div>
      </div>
    </header>

    <div
      class="flex justify-between items-center px-[40px] py-[12px] rounded-[20px] bg-white">
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
