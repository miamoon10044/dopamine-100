<template>
  <div
    class="card rounded-3xl"
    :class="[agent.name.toLowerCase(), { animated: isAnimated }]"
    @mousemove="onMouseMove"
    @mouseout="onMouseOut"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    :style="cardInlineStyles">
    <video
      class="card-video p-2 rounded-2xl bg-white border border-solid border-slate-600"
      autoplay
      loop
      muted
      playsinline
      :src="agent.frontImage"></video>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  agent: {
    type: Object,
    required: true,
  },
});

const isAnimated = ref(true);
const gradPos = ref('');
const sparkPos = ref('');
const sparkOpacity = ref('');
const cardTransform = ref('');
let animationTimeout = null;

const onMouseMove = (e) => {
  let pos = [e.offsetX, e.offsetY];
  e.preventDefault();
  const card = e.currentTarget;
  if (e.type === 'touchmove') {
    pos = [e.touches[0].clientX, e.touches[0].clientY];
  }
  const l = pos[0];
  const t = pos[1];
  const h = card.offsetHeight;
  const w = card.offsetWidth;
  const px = Math.abs(Math.floor((100 / w) * l) - 100);
  const py = Math.abs(Math.floor((100 / h) * t) - 100);
  const pa = 50 - px + (50 - py);
  const lp = 50 + (px - 50) / 1.5;
  const tp = 50 + (py - 50) / 1.5;
  const px_spark = 50 + (px - 50) / 7;
  const py_spark = 50 + (py - 50) / 7;
  const p_opc = 20 + Math.abs(pa) * 1.5;
  const ty = ((tp - 50) / 2) * -1;
  const tx = ((lp - 50) / 1.5) * 0.5;

  gradPos.value = `${lp}% ${tp}%`;
  sparkPos.value = `${px_spark}% ${py_spark}%`;
  sparkOpacity.value = p_opc / 100;
  cardTransform.value = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  isAnimated.value = false;

  if (animationTimeout) {
    clearTimeout(animationTimeout);
    animationTimeout = null;
  }
};

const onMouseOut = () => {
  gradPos.value = '';
  sparkPos.value = '';
  cardTransform.value = '';
  isAnimated.value = false;

  animationTimeout = setTimeout(() => {
    isAnimated.value = true;
  }, 2500);
};

const onTouchMove = (e) => {
  onMouseMove(e);
};

const onTouchEnd = () => {
  onMouseOut();
};

const cardInlineStyles = computed(() => ({
  '--gradPos': gradPos.value || '50% 50%',
  '--sparkPos': sparkPos.value || '50% 50%',
  '--sparkOpacity': sparkOpacity.value || 0.75,
  transform: cardTransform.value || '',
  '--color1': props.agent.color1,
  '--color2': props.agent.color2,
}));
</script>

<style>
.card {
  @apply relative overflow-hidden z-10 touch-none rounded-[5%_/_3.5%];
  width: 300px;
  height: 420px;
  background-color: #040712;
  transform-origin: center;
  transition:
    transform 0.5s ease,
    box-shadow 0.2s ease;
  will-change: transform, filter;
  box-shadow:
    -5px -5px 5px -5px var(--color1),
    5px 5px 5px -5px var(--color2),
    -7px -7px 10px -5px transparent,
    7px 7px 10px -5px transparent,
    0 0 5px 0px rgba(255, 255, 255, 0),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

/* Position the video to cover the card */
.card-video {
  @apply absolute inset-0 object-cover w-full h-full;
  z-index: 0;
}

/* Ensure pseudo-elements are above the video */
.card::before,
.card::after {
  content: '';
  @apply absolute inset-0;
  background-repeat: no-repeat;
  opacity: 0.5;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
  z-index: 1;
}

.card::before {
  background-position: var(--gradPos, 50% 50%);
  background-size: 300% 300%;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 25%,
    transparent 47%,
    transparent 53%,
    var(--color2) 75%,
    transparent 100%
  );
  opacity: 0.5;
  filter: brightness(0.5) contrast(1);
}

.card::after {
  opacity: var(--sparkOpacity, 0.75);
  background-image: url('https://assets.codepen.io/13471/sparkles.gif'),
    url('https://assets.codepen.io/13471/holo.png'),
    linear-gradient(
      125deg,
      #ff008450 15%,
      #fca40040 30%,
      #ffff0030 40%,
      #00ff8a20 60%,
      #00cfff40 70%,
      #cc4cfa50 85%
    );
  background-position: var(--sparkPos, 50% 50%);
  background-size: 160%;
  background-blend-mode: overlay;
  filter: brightness(1) contrast(1);
  transition: all 0.33s ease;
  mix-blend-mode: color-dodge;
}

.card.active::after,
.card:hover::after {
  filter: brightness(1) contrast(1);
  opacity: 1;
}

.card.active,
.card:hover {
  animation: none;
  transition: box-shadow 0.1s ease-out;
}

.card.active::before,
.card:hover::before {
  animation: none;
  background-image: linear-gradient(
    110deg,
    transparent 25%,
    var(--color1) 48%,
    var(--color2) 52%,
    transparent 75%
  );
  background-position: var(--gradPos, 50% 50%);
  background-size: 250% 250%;
  opacity: 0.88;
  filter: brightness(0.66) contrast(1.33);
  transition: none;
}

.card.active::before,
.card:hover::before,
.card.active::after,
.card:hover::after {
  animation: none;
  transition: none;
}

.card.animated {
  transition: none;
  animation: holoCard 12s ease 0s 1;
}

.card.animated::before {
  transition: none;
  animation: holoGradient 12s ease 0s 1;
}

.card.animated::after {
  transition: none;
  animation: holoSparkle 12s ease 0s 1;
}

@keyframes holoSparkle {
  0%,
  100% {
    opacity: 0.75;
    background-position: 50% 50%;
    filter: brightness(1.2) contrast(1.25);
  }
  5%,
  8% {
    opacity: 1;
    background-position: 40% 40%;
    filter: brightness(0.8) contrast(1.2);
  }
  13%,
  16% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(1.2) contrast(0.8);
  }
  35%,
  38% {
    opacity: 1;
    background-position: 60% 60%;
    filter: brightness(1) contrast(1);
  }
  55% {
    opacity: 0.33;
    background-position: 45% 45%;
    filter: brightness(1.2) contrast(1.25);
  }
}

@keyframes holoGradient {
  0%,
  100% {
    opacity: 0.5;
    background-position: 50% 50%;
    filter: brightness(0.5) contrast(1);
  }
  5%,
  9% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(0.75) contrast(1.25);
  }
  13%,
  17% {
    background-position: 0% 0%;
    opacity: 0.88;
  }
  35%,
  39% {
    background-position: 100% 100%;
    opacity: 1;
    filter: brightness(0.5) contrast(1);
  }
  55% {
    background-position: 0% 0%;
    opacity: 1;
    filter: brightness(0.75) contrast(1.25);
  }
}

@keyframes holoCard {
  0%,
  100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  5%,
  8% {
    transform: rotateZ(0deg) rotateX(6deg) rotateY(-20deg);
  }
  13%,
  16% {
    transform: rotateZ(0deg) rotateX(-9deg) rotateY(32deg);
  }
  35%,
  38% {
    transform: rotateZ(3deg) rotateX(12deg) rotateY(20deg);
  }
  55% {
    transform: rotateZ(-3deg) rotateX(-12deg) rotateY(-27deg);
  }
}
</style>
