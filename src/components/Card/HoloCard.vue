<script setup>
import { ref } from 'vue';

// Define props
const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  activeCardIndex: {
    type: Number,
    required: true,
  },
  setActiveCard: {
    type: Function,
    required: true,
  },
  cardsLength: {
    type: Number,
    required: true,
  },
});

// Refs for card and shine elements
const cardRef = ref(null);
const shineRef = ref(null);

let animationFrame;

// Mouse move handler
const handleMouseMove = (event) => {
  cancelAnimationFrame(animationFrame);

  const cardElement = cardRef.value;
  const shineElement = shineRef.value;
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

// Reset card to initial state
const resetCard = () => {
  const cardElement = cardRef.value;
  const shineElement = shineRef.value;

  cancelAnimationFrame(animationFrame);

  // Set initial rotateZ for left and right cards
  const initialRotateZ =
    props.index === 0
      ? '-6deg'
      : props.index === props.cardsLength - 1
        ? '6deg'
        : '0deg';

  // Smoothly reset the card back to its original state with initial rotateZ
  cardElement.style.transition = 'transform 0.6s ease-out';
  cardElement.style.transform = `rotateX(0) rotateY(0) rotateZ(${initialRotateZ}) scale(1)`;

  // Fade out the shine
  shineElement.style.opacity = '0';
};
</script>

<template>
  <div
    class="holo-card relative w-[300px] h-[420px] bg-white rounded-lg overflow-hidden p-2 shadow-xl transition-transform duration-500 ease-out transform-gpu cursor-pointer hover:z-30"
    @mousemove="handleMouseMove"
    @mouseleave="resetCard"
    @click="setActiveCard(index)"
    :class="{
      active: activeCardIndex === index,
      'z-10': index === 1,
      'z-20': index !== 1,
    }"
    ref="cardRef"
    :style="{
      transform:
        index === 0
          ? 'rotateZ(-6deg)'
          : index === cardsLength - 1
            ? 'rotateZ(6deg)'
            : 'rotateZ(0deg)',
      'margin-top': index === 1 ? '0px' : '17px',
      perspective: '1000px',
    }">
    <!-- Holographic Shine Layer -->
    <div
      class="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 shine"
      ref="shineRef"></div>

    <!-- Holographic Gradient -->
    <div
      class="absolute inset-0 z-30 holographic-gradient opacity-0 transition-opacity duration-500 hover:opacity-100"></div>

    <!-- Card Content -->
    <div class="relative z-10 flex flex-col justify-center items-center h-full">
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
</template>

<style scoped>
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
    rgba(0, 221, 255, 0.25),
    rgba(11, 38, 216, 0.25)
  );
}

/* Shine effect overlay */
.shine {
  /* background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent); */
  transition: background 0.3s ease;
}

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
    rgba(226, 8, 205, 1),
    rgba(7, 223, 194, 1),
    transparent
  );
  transition:
    transform 0.3s ease,
    opacity 0.3s ease-in-out;
  z-index: 1;
}
</style>
