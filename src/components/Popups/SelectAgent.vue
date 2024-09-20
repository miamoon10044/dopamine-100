<script setup>
import { ref, onMounted } from 'vue';

// Reactive variable to control modal visibility
const openModal = ref(false);

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

      <div class="flex flex-row py-10 gap-3">
        <img
          class="shadow-2xl rounded-2xl card-item"
          src="../../assets/select-agent/agent-2.png"
          alt="" />
        <img
          class="shadow-2xl rounded-2xl card-item"
          src="../../assets/select-agent/agent-1.png"
          alt="" />
        <img
          class="shadow-2xl rounded-2xl card-item"
          src="../../assets/select-agent/agent-3.png"
          alt="" />
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

.card-item {
  transform: scale(1);
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.3);
    z-index: 1;
  }
}
</style>
