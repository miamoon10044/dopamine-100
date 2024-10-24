<script setup>
import { ref, onMounted } from 'vue';
import Card from '@/components/Card/CardV2.vue';
import cardsData from '@/assets/data2.json';

import LocaleDropdown from '../LocaleDropdown/LocaleDropdown.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Access the locale object

const changeLocale = (language) => {
  locale.value = language; // Set the new locale
};

// Reactive variables
const openModal = ref(false);

// Cards
const cards = cardsData.map((card) => ({
  ...card,
  rarity: card.rarity.toLowerCase(),
  supertype: card.supertype.toLowerCase(),
  subtypes: Array.isArray(card.subtypes)
    ? card.subtypes.join(' ').toLowerCase()
    : card.subtypes.toLowerCase(),
  gallery: card.number.startsWith('TG'),
}));

const active = ref(null);

const setCardActive = (card) => {
  active.value = active.value?.id === card.id ? null : card;
};

const setCardInactive = () => {
  active.value = null;
};
// Cards end

// Open the modal automatically when the page loads
onMounted(() => {
  openModal.value = true;
});
</script>

<template>
  <!-- Modal Dialog -->
  <div
    class="agent-modal"
    :class="{ 'modal modal-open': openModal, modal: !openModal }">
    <div
      class="modal-box flex flex-col items-center py-8 px-5 bg-transparent shadow-none w-full max-w-100 h-full max-h-full">
      <div class="relative max-w-[900px] w-full flex justify-center">
        <img src="../../assets/logo.png" alt="" />
        <LocaleDropdown
          class="absolute top-0 right-0"
          :changeLocale="changeLocale" />
      </div>

      <div class="mt-[54px] text-center">
        <h2 class="text-[32px] mb-5" v-html="$t('select_agent.title')"></h2>
        <p class="text-gray-400" v-html="$t('select_agent.subtitle')"></p>
      </div>

      <div
        class="flex flex-row justify-center py-10 gap-[18px] w-full max-w-[900px]"
        @click="setCardInactive">
        <div class="grid grid-rows-1 grid-cols-3 gap-10">
          <Card
            v-for="card in cards"
            :key="card.id"
            @click.stop="setCardActive(card)"
            :name="card.name"
            :img="card.src.image"
            :video="card.src.video"
            :number="card.number"
            :supertype="card.supertype"
            :subtypes="card.subtypes"
            :rarity="card.rarity"
            :gallery="card.gallery"
            :active="active?.id === card.id" />
        </div>
      </div>

      <div class="modal-action flex-col items-center">
        <button
          class="btn shadow-none bg-pink text-white rounded-3xl px-[80px] py-4 text-sm min-h-[auto] h-[auto] leading-none max-w-[auto] hover:bg-pink-600"
          @click="openModal = false">
          {{ $t('select_agent.confirm') }}
        </button>
        <p class="text-pink mt-6">{{ $t('select_agent.please_select') }}</p>
      </div>
    </div>

    <!-- Blurred backdrop for modal -->
    <div class="modal-backdrop backdrop-blur bg-white/90"></div>
  </div>
</template>

<style scoped>
.modal-box {
  max-width: none;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
}

.slice {
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
}
</style>
