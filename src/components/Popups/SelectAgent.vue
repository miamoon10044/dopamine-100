<script setup>
import { ref, onMounted } from 'vue';
import HoloCard from '../Card/HoloCard.vue';
import HoloCardV2 from '../Card/HoloCardV2.vue';

// Reactive variables
const openModal = ref(false);
// const activeCardIndex = ref(null);

import agent1 from '@/assets/select-agent/agent-1.mp4';
import agent2 from '@/assets/select-agent/agent-2.mp4';
import agent3 from '@/assets/select-agent/agent-3.mp4';

// Open the modal automatically when the page loads
onMounted(() => {
  openModal.value = true;
});

// Array of card data
// const cards = [
//   { id: 'holo-1', imgSrc: agent2 },
//   { id: 'holo-2', imgSrc: agent1 },
//   { id: 'holo-3', imgSrc: agent3 },
// ];

const agents = ref([
  {
    name: 'Agent2',
    color1: '#fac',
    color2: '#ddccaa',
    frontImage: agent2,
  },
  {
    name: 'Agent1',
    color1: '#54a29e',
    color2: '#a79d66',
    frontImage: agent1,
  },
  {
    name: 'Agent3',
    color1: '#ec9bb6',
    color2: '#ccac6f',
    frontImage: agent3,
  },
]);

// Set active card on click
// const setActiveCard = (index) => {
//   activeCardIndex.value = activeCardIndex.value === index ? null : index;
// };
</script>

<template>
  <!-- Modal Dialog -->
  <div
    class="agent-modal"
    :class="{ 'modal modal-open': openModal, modal: !openModal }">
    <div
      class="modal-box flex flex-col items-center py-8 px-5 bg-transparent shadow-none">
      <img src="../../assets/logo.png" alt="" />

      <div class="mt-[54px] text-center">
        <h2 class="text-[32px] mb-5">
          Please select your
          <span class="text-pink">Agent</span>
        </h2>
        <p class="text-gray-400">
          担当エージェントと軽い会話からプロモーションに至るまで、
          <br />
          様々なコミュニケーションを取ることができますよ。
        </p>
      </div>

      <div class="flex flex-row py-10 gap-[18px]">
        <!-- <HoloCard
          v-for="(cardData, index) in cards"
          :key="index"
          :cardData="cardData"
          :index="index"
          :activeCardIndex="activeCardIndex"
          :setActiveCard="setActiveCard"
          :cardsLength="cards.length" /> -->

        <HoloCardV2
          v-for="(agent, index) in agents"
          :key="index"
          :agent="agent" />
      </div>

      <div class="modal-action flex-col items-center">
        <button
          class="btn shadow-none bg-pink text-white rounded-3xl px-[80px] py-4 mt-3 text-sm min-h-[auto] h-[auto] leading-none max-w-[auto] hover:bg-pink-600"
          @click="openModal = false">
          Confirm Agent
        </button>
        <p class="text-pink mt-6">Please select your agent</p>
      </div>
    </div>

    <!-- Blurred backdrop for modal -->
    <div class="modal-backdrop backdrop-blur bg-white/90"></div>
  </div>
</template>

<style scoped>
.modal-box {
  width: 1200px;
  max-width: none;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
}

/* Other styles remain unchanged */
</style>
