<script setup>
import { ref, onMounted } from 'vue';
import Card from '@/components/Card/Card.vue';
import cardsData from '@/assets/data.json';

import LocaleDropdown from '../LocaleDropdown/LocaleDropdown.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n(); // Access the locale object

const changeLocale = (language) => {
  locale.value = language; // Set the new locale
};

// Reactive variables
const openModal = ref(false);

const active = ref(null);
const cards = cardsData.map((card) => {
  return {
    ...card,
    rarity: card.rarity.toLowerCase(),
    supertype: card.supertype.toLowerCase(),
    subtypes: Array.isArray(card.subtypes)
      ? card.subtypes.map((subtype) => subtype.toLowerCase())
      : [card.subtypes.toLowerCase()],
    gallery: card.number.startsWith('TG'),
  };
});

const slices = [
  // basics
  cards.slice(0, 6),
  // holos
  cards.slice(6, 12),
  // galaxies
  cards.slice(12, 15),
  // radiant
  cards.slice(15, 18),
  // basicGallery
  cards.slice(60, 63),
  // vee
  cards.slice(18, 21),
  // veeUltra
  cards.slice(21, 24),
  // veeAlt
  [...cards.slice(27, 30), ...cards.slice(33, 36)],
  // veeMax
  cards.slice(24, 27),
  // veeMaxAlt
  [cards[36], cards[31], cards[37]],
  // veeStar
  cards.slice(39, 42),
  // trainerHolo
  cards.slice(42, 48),
  // rainbow
  cards.slice(48, 51),
  // gold
  cards.slice(51, 60),
  // veeGallery
  cards.slice(63, 69),
];

import agent1 from '@/assets/select-agent/agent-1.mp4';
import agent2 from '@/assets/select-agent/agent-2.mp4';
import agent3 from '@/assets/select-agent/agent-3.mp4';

// Open the modal automatically when the page loads
onMounted(() => {
  openModal.value = true;
});

const agents = ref([
  {
    name: 'Agent2',
    color1: '#e0758790',
    color2: '#d1c88c90',
    frontImage: agent2,
  },
  {
    name: 'Agent1',
    color1: '#86b0c490',
    color2: '#bfb2ed90',
    frontImage: agent1,
  },
  {
    name: 'Agent3',
    color1: '#9cd1f790',
    color2: '#bad1c790',
    frontImage: agent3,
  },
]);
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
        class="flex flex-row justify-center py-10 gap-[18px] w-full max-w-[900px]">
        <div class="showcase" @click="active = null">
          <div v-for="(slice, index) in slices" :key="index">
            <div class="slice">
              <Card
                v-for="card in slice"
                :key="card.id"
                :name="card.name"
                :img="card.images.large"
                :number="card.number"
                :supertype="card.supertype"
                :subtypes="card.subtypes"
                :rarity="card.rarity"
                :gallery="card.gallery"
                :active="active === card"
                @click.stop="active = active === card ? null : card" />
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div class="modal-action flex-col items-center">
        <button
          class="btn shadow-none bg-pink text-white rounded-3xl px-[80px] py-4 mt-3 text-sm min-h-[auto] h-[auto] leading-none max-w-[auto] hover:bg-pink-600"
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

.showcase {
  padding: 4rem;
}

.slice {
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
}
</style>
