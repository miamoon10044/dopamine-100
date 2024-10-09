<template>
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
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Access the locale object

defineProps({
  changeLocale: Function,
});
</script>
