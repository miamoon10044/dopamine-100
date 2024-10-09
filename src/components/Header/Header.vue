<template>
  <header class="flex justify-between py-4">
    <div>
      <img src="../../assets/logo.png" alt="Dopamine 100 Logo" />
    </div>
    <div class="flex gap-5 items-center">
      <NavigationLinks />
      <LocaleDropdown :changeLocale="changeLocale" />
    </div>
  </header>
</template>

<script setup>
import NavigationLinks from './NavigationLinks.vue';
import LocaleDropdown from '../LocaleDropdown/LocaleDropdown.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Access the locale object

const changeLocale = (language) => {
  locale.value = language; // Set the new locale
};
</script>

<style scoped>
header {
  font-size: 13px;
}

header a {
  color: #474747; /* TODO: Transfer to themes */
}
</style>
