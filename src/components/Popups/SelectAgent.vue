<script setup>
import { ref, onMounted } from 'vue';

// Importing images
import agent1 from '/src/assets/select-agent/agent-1.mp4';
import agent2 from '/src/assets/select-agent/agent-2.mp4';
import agent3 from '/src/assets/select-agent/agent-3.mp4';

// Reactive variable to control modal visibility
const openModal = ref(false);
const activeCardIndex = ref(null);

// Open the modal automatically when the page loads
onMounted(() => {
  openModal.value = true;
});

// Array of card data (you can customize this)
const cards = [
  { id: 'holo-1', imgSrc: agent2 },
  { id: 'holo-2', imgSrc: agent1 },
  { id: 'holo-3', imgSrc: agent3 },
];

// Create refs for multiple cards and their shine effects
const cardsRefs = ref([]);
const shineRefs = ref([]);

let animationFrame;

// Mouse move handler for each card
const handleMouseMove = (event, index) => {
  cancelAnimationFrame(animationFrame);

  const cardElement = cardsRefs.value[index];
  const shineElement = shineRefs.value[index];
  const rect = cardElement.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  // Calculate rotation based on mouse position
  const rotateX = (y / rect.height) * 60;
  const rotateY = (x / rect.width) * -60;

  // Set rotateZ to 0 on hover
  const rotateZ = '0deg';

  // Request animation frame for smoother updates
  animationFrame = requestAnimationFrame(() => {
    // Combine rotateX, rotateY with rotateZ = 0 on hover
    cardElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}) scale(1.15)`;

    // Shine effect follows the mouse smoothly
    shineElement.style.opacity = '1';
    shineElement.style.background = `radial-gradient(circle at ${event.offsetX}px ${event.offsetY}px, rgba(255, 255, 255, 0.5), transparent)`;
  });
};

const resetCard = (index) => {
  const cardElement = cardsRefs.value[index];
  const shineElement = shineRefs.value[index];

  cancelAnimationFrame(animationFrame);

  // Set initial rotateZ for left and right cards
  const initialRotateZ =
    index === 0 ? '-6deg' : index === cards.length - 1 ? '6deg' : '0deg';

  // Smoothly reset the card back to its original state with initial rotateZ
  cardElement.style.transition = 'transform 0.6s ease-out';
  cardElement.style.transform = `rotateX(0) rotateY(0) rotateZ(${initialRotateZ}) scale(1)`;

  // Fade out the shine
  shineElement.style.opacity = '0';
};

// Set active card on click
const setActiveCard = (index) => {
  activeCardIndex.value = activeCardIndex.value === index ? null : index;
};
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
        <div
          v-for="(cardData, index) in cards"
          :key="index"
          class="relative w-[300px] h-[420px] bg-white rounded-lg overflow-hidden p-2 shadow-xl transition-transform duration-500 ease-out transform-gpu cursor-pointer hover:z-30"
          @mousemove="(event) => handleMouseMove(event, index)"
          @mouseleave="() => resetCard(index)"
          @click="setActiveCard(index)"
          :class="{
            active: activeCardIndex === index,
            'z-10': index === 1,
            'z-20': index !== 1,
          }"
          ref="cardsRefs"
          :style="{
            transform:
              index === 0
                ? 'rotateZ(-6deg)'
                : index === cards.length - 1
                  ? 'rotateZ(6deg)'
                  : 'rotateZ(0deg)',
            'margin-top': index === 1 ? '0px' : '17px',
            perspective: '1000px',
          }">
          <!-- Holographic Shine Layer -->
          <div
            class="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 shine-effect shine"
            ref="shineRefs"></div>

          <!-- Holographic Gradient -->
          <div
            class="absolute inset-0 z-30 holographic-gradient opacity-0 transition-opacity duration-500 hover:opacity-20"></div>

          <!-- Card Content -->
          <div
            class="relative z-10 flex flex-col justify-center items-center h-full">
            <video
              class="rounded"
              width="300"
              height="420"
              autoplay
              muted
              playsinline
              loop>
              <source :src="cardData.imgSrc" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
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
  z-index: 1;

  &:hover {
    transform: scale(1.3);
    z-index: 2;
  }
}

/* Custom shimmer effect for the holographic cards */
@keyframes shimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-shimmer {
  background-size: 200% 200%;
  animation: shimmer 3s ease-in-out infinite;
}

.holographic-gradient {
  background: linear-gradient(
    to bottom right,
    rgba(0, 221, 255, 0.5),
    rgba(11, 38, 216, 0.3)
  );
}

/* Shine effect overlay */
.shine {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
  transition: background 0.3s ease;
}

/* Enable smooth transformation */
.relative {
  will-change: transform;
}

.relative.active {
  transform: scale(1.25) !important;
  z-index: 100;
}

/* Enhance shadow for more depth */
.shadow-lg {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.shine-effect {
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition:
    transform 0.3s ease,
    opacity 0.3s ease-in-out;
  z-index: 1;
}

.group:hover .shine-effect {
  animation: lightningEffect 1.5s infinite linear;
}

@keyframes lightningEffect {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) rotate(20deg) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-50%) rotate(-20deg) scale(1);
  }
}
</style>
