<template>
  <div
    class="card"
    :class="{ active, interacting: interacting.value, loading: loading.value }"
    ref="card"
    :style="styles"
    :data-number="number"
    :data-subtypes="subtypes"
    :data-supertype="supertype"
    :data-rarity="rarity"
    :data-gallery="gallery">
    <div class="card__translater" v-motion="motionTranslate">
      <button
        class="card__rotator"
        ref="rotator"
        @pointermove="interact"
        @mouseout="interactEnd"
        aria-label="Expand the Pokemon Card; {{ name }}."
        v-motion="motionRotate">
        <img
          class="card__back"
          :src="back_img"
          alt="The back of a Pokemon Card, a Pokeball in the center with Pokemon logo above and below" />
        <div class="card__front">
          <img
            :src="front_img"
            @load="imageLoader"
            :alt="`Front design of the ${name} Pokemon Card, with the stats and info around the edge`" />
          <CardShine :subtypes="subtypes" :supertype="supertype" />
          <CardGlare :subtypes="subtypes" :rarity="rarity" />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useMotion, useMotionControls, useSpring } from '@vueuse/motion';
import { clamp, round } from '@/helpers/Math';
import CardShine from '@/components/Card/CardShine.vue';
import CardGlare from '@/components/Card/CardGlare.vue';

// Props
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  supertype: {
    type: String,
    required: true,
  },
  subtypes: {
    type: Array,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
  gallery: {
    type: Boolean,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

// Refs and data
const galaxyPosition = Math.floor(Math.random() * 1500);
const back_img =
  'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg';

const springR = { stiffness: 666, damping: 25 };
const springD = { stiffness: 333, damping: 45 };

const firstPop = ref(true);
const interacting = ref(false);
const loading = ref(true);
const front_img = ref('');

// Refs to DOM elements
const card = ref(null);
const rotator = ref(null);

// Motion controls
const motionTranslate = useMotionControls();
const motionRotate = useMotionControls();
const motionScale = useMotionControls();

// Computed styles
const styles = computed(() => {
  return `
    --galaxybg: center ${galaxyPosition}px;
  `;
});

// Lifecycle hook
onMounted(() => {
  const img_base = props.img.startsWith('http')
    ? ''
    : 'https://images.pokemontcg.io/';
  front_img.value = img_base + props.img;
});

// Methods
function interact(e) {
  console.log(e);

  if (props.active) {
    interacting.value = true;
  }

  let clientX = e.clientX;
  let clientY = e.clientY;

  if (e.type === 'touchmove') {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  }

  const $el = e.target;
  const rect = $el.getBoundingClientRect();

  const absolute = {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };

  const percent = {
    x: round((100 / rect.width) * absolute.x),
    y: round((100 / rect.height) * absolute.y),
  };

  const center = {
    x: percent.x - 50,
    y: percent.y - 50,
  };

  // Update motion controls
  // motionTranslate.set({
  //   x: 0,
  //   y: 0,
  //   transition: {
  //     stiffness: springR.stiffness,
  //     damping: springR.damping,
  //   },
  // });

  // motionRotate.set({
  //   rotateX: round(-(center.y / 2)),
  //   rotateY: round(center.x / 3.5),
  //   transition: {
  //     stiffness: springR.stiffness,
  //     damping: springR.damping,
  //   },
  // });
}

function imageLoader() {
  loading.value = false;
}

let interactEndTimeout;

function interactEnd(e, delay = 100) {
  clearTimeout(interactEndTimeout);
  interactEndTimeout = setTimeout(() => {
    interacting.value = false;

    motionRotate.set({
      rotateX: 0,
      rotateY: 0,
      transition: {
        stiffness: 0.01,
        damping: 0.06,
      },
    });
  }, delay);
}

function _popover() {
  const rect = card.value.getBoundingClientRect();
  let delay = 100;
  let scaleW = (window.innerWidth / rect.width) * 0.9;
  let scaleH = (window.innerHeight / rect.height) * 0.9;
  let scaleF = 1.75;

  _setCenter();

  if (firstPop.value) {
    delay = 1000;
    firstPop.value = false;
  }

  motionScale.set({
    scale: Math.min(scaleW, scaleH, scaleF),
    transition: {
      stiffness: springD.stiffness,
      damping: springD.damping,
    },
  });

  interactEnd(null, delay);
}

function _retreat() {
  motionScale.set({
    scale: 1,
    transition: {
      stiffness: springD.stiffness,
      damping: springD.damping,
    },
  });
}

function _setCenter() {
  const rect = card.value.getBoundingClientRect();
  const view = document.documentElement;
  const delta = {
    x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
    y: round(view.clientHeight / 2 - rect.y - rect.height / 2),
  };

  motionTranslate.set({
    x: delta.x,
    y: delta.y,
    transition: {
      stiffness: springD.stiffness,
      damping: springD.damping,
    },
  });
}

// Watch active prop
watch(
  () => props.active,
  (newVal) => {
    if (newVal) {
      _popover();
    } else {
      _retreat();
    }
  }
);
</script>

<style lang="scss" scoped>
:root {
  --mx: 50%;
  --my: 50%;
  --s: 1;
  --o: 0;
  --tx: 0px;
  --ty: 0px;
  --rx: 0deg;
  --ry: 0deg;
  --pos: 50% 50%;
  --posx: 50%;
  --posy: 50%;
  --hyp: 0;
}

.card {
  --radius: 4.55% / 3.5%;
  --back: #004177;
  --glow: #69d1e9;
  z-index: calc(var(--s) * 100);
  transform: translate3d(0, 0, 0.1px);
  will-change: transform, visibility;
  transform-style: preserve-3d;
  width: 300px;

  &.interacting {
    z-index: calc(var(--s) * 120);
  }

  &.active {
    .card__translater,
    .card__rotator {
      touch-action: none;
    }

    .card__rotator {
      box-shadow:
        0 0 10px 0px var(--glow),
        0 0 10px 0px var(--glow),
        0 0 30px 0px var(--glow);
    }

    .card__rotator:focus {
      box-shadow: 0px 10px 30px 3px black;
    }
  }

  &.loading {
    .card__front {
      opacity: 0;
    }

    .card__back {
      transform: rotateY(0deg);
    }
  }
}

.card__translater,
.card__rotator {
  display: grid;
  perspective: 600px;
  transform-origin: center;
  will-change: transform;
}

.card__translater {
  width: auto;
  position: relative;
  transform: translate3d(var(--tx), var(--ty), 0) scale(var(--s));
}

.card__rotator {
  transform: rotateY(var(--rx)) rotateX(var(--ry));
  transform-style: preserve-3d;
  box-shadow: 0px 10px 20px -5px black;
  border-radius: var(--radius);
  outline: none;
  transition:
    box-shadow 0.4s ease,
    outline 0.2s ease;
  appearance: none;
  border: none;
  background: top;
  padding: 0;

  &:focus {
    box-shadow:
      0 0 10px 0px var(--glow),
      0 0 10px 0px var(--glow),
      0 0 30px 0px var(--glow);
  }

  * {
    width: 100%;
    display: grid;
    grid-area: 1/1;
    border-radius: var(--radius);
    image-rendering: optimizeQuality;
    transform-style: preserve-3d;
  }

  img {
    outline: 1px solid transparent;
    aspect-ratio: 0.716;
    height: auto;
  }

  .card__back {
    background-color: var(--back);
    transform: rotateY(180deg) translateZ(1px);
    backface-visibility: visible;
  }

  .card__front {
    opacity: 1;
    transition: opacity 0.33s ease-out;
  }
}
</style>
