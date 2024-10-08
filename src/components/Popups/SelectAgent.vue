<script setup>
import { ref, onMounted } from 'vue';
import HoloCard from '../Card/HoloCard.vue';
import HoloCardV2 from '../Card/HoloCardV2.vue';

// Reactive variables
const openModal = ref(false);

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

      <div
        class="flex flex-row justify-center py-10 gap-[18px] w-full max-w-[900px]">
        <HoloCardV2
          class="cursor-pointer"
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
  max-width: none;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
}

/* Other styles remain unchanged */
</style>
