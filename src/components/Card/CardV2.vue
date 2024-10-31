<template>
  <div
    class="card"
    :class="{
      active: props.active,
      interacting: interacting,
      loading: loading,
    }"
    ref="card"
    :style="cardStyles"
    :data-number="props.number"
    :data-subtypes="props.subtypes"
    :data-supertype="props.supertype"
    :data-rarity="props.rarity"
    :data-gallery="props.gallery">
    <div class="card__translater">
      <button
        class="card__rotator"
        ref="rotator"
        @pointermove="interact"
        @pointerout="interactEnd"
        aria-label="Expand the Pokémon Card; {{ props.name }}.">
        <img
          @load="imageLoader"
          class="card__back"
          :src="back_img"
          alt="The back of a Pokémon Card" />
        <div
          class="card__front p-3 h-full bg-white border border-solid border-slate-500">
          <video
            class="h-full !rounded-md object-cover border border-solid border-slate-800"
            autoplay
            muted
            playsinline
            loop
            :poster="props.img">
            <source :src="props.video" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <CardShine :subtypes="props.subtypes" :supertype="props.supertype" />
          <CardGlare :subtypes="props.subtypes" :rarity="props.rarity" />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import { useSpring, useMotionProperties } from '@vueuse/motion';
import { clamp, round } from '@/helpers/Math';
import CardShine from '@/components/Card/CardShine.vue';
import CardGlare from '@/components/Card/CardGlare.vue';
import backCard from '@/assets/select-agent/back.png';

// Define props using the defineProps macro
const props = defineProps({
  img: { type: String, required: true },
  video: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: [Number, String], required: true },
  supertype: { type: String, required: true },
  subtypes: { type: [Array, String], required: true },
  rarity: { type: String, required: true },
  gallery: { type: Boolean, required: true },
  active: { type: Boolean, required: true },
  backActive: { type: Boolean, required: true },
});

const galaxyPosition = Math.floor(Math.random() * 1500);

// Define refs for reactive data
const card = ref(null);
const back_img = ref(backCard);
const rotator = ref(null);

const SPRING_R = { stiffness: 666, damping: 25 };
const SPRING_D = { stiffness: 333, damping: 45 };
const SNAP_SETTINGS = { stiffness: 0.01, damping: 0.06 };

const { motionProperties } = useMotionProperties(card, {
  x: 0,
  y: 0,
  scale: 1,
});

// Initialize springs using @vueuse/motion
const springRotate = useSpring(motionProperties, SPRING_R);
const springGlare = useSpring({ x: 50, y: 50, o: 0 }, SPRING_R);
const springBackground = useSpring({ x: 50, y: 50 }, SPRING_R);

const springRotateDelta = useSpring({ x: 0, y: 0 }, SPRING_D);
const springTranslate = useSpring({ x: 0, y: 0 }, SPRING_D);
const springScale = useSpring(motionProperties, SPRING_D);

const firstPop = ref(true);
const interacting = ref(false);
const loading = ref(true);

// Computed property for card styles
const cardStyles = computed(
  () => `
  --mx: ${springGlare.values.x}%;
  --my: ${springGlare.values.y}%;
  --tx: ${springTranslate.values.x}px;
  --ty: ${springTranslate.values.y}px;
  --s: ${springScale.values.s};
  --o: ${springGlare.values.o};
  --rx: ${springRotate.values.x + springRotateDelta.values.x}deg;
  --ry: ${springRotate.values.y + springRotateDelta.values.y}deg;
  --pos: ${springBackground.values.x}% ${springBackground.values.y}%;
  --posx: ${springBackground.values.x}%;
  --posy: ${springBackground.values.y}%;
  --hyp: ${clamp(
    Math.sqrt(
      (springGlare.values.y - 50) * (springGlare.values.y - 50) +
        (springGlare.values.x - 50) * (springGlare.values.x - 50)
    ) / 50,
    0,
    1
  )};
  --galaxybg: center ${galaxyPosition}px;
`
);

// Methods converted to functions
const interact = (e) => {
  if (props.active) {
    interacting.value = true;
  }

  if (e.type === 'touchmove') {
    e.clientX = e.touches[0].clientX;
    e.clientY = e.touches[0].clientY;
  }

  const $el = e.target;
  const rect = $el.getBoundingClientRect(); // get element's current size/position
  const absolute = {
    x: e.clientX - rect.left, // get mouse position from left
    y: e.clientY - rect.top, // get mouse position from right
  };

  const percent = {
    x: round((100 / rect.width) * absolute.x),
    y: round((100 / rect.height) * absolute.y),
  };

  const center = {
    x: percent.x - 50,
    y: percent.y - 50,
  };

  springBackground.values.stiffness = SPRING_R.stiffness;
  springBackground.values.damping = SPRING_R.damping;
  springBackground.set({
    x: round(50 + percent.x / 4 - 12.5),
    y: round(50 + percent.y / 3 - 16.67),
  });

  springRotate.values.stiffness = SPRING_R.stiffness;
  springRotate.values.damping = SPRING_R.damping;
  springRotate.set({
    x: round(-(center.x / 3.5)),
    y: round(center.y / 2),
  });

  springGlare.values.stiffness = SPRING_R.stiffness;
  springGlare.values.damping = SPRING_R.damping;
  springGlare.set({
    x: percent.x,
    y: percent.y,
    o: 1,
  });

  // glareTest.value = center.x; // why do i need this to animate T_T
};

const imageLoader = () => {
  loading.value = false;
};

const interactEnd = (e, delay = 100) => {
  setTimeout(() => {
    const snapStiff = 0.01;
    const snapDamp = 0.06;
    interacting.value = false;

    springRotate.values.stiffness = snapStiff;
    springRotate.values.damping = snapDamp;
    springRotate.set({ x: 0, y: 0 });

    springGlare.values.stiffness = snapStiff;
    springGlare.values.damping = snapDamp;
    springGlare.set({ x: 50, y: 50, o: 0 });

    springBackground.values.stiffness = snapStiff;
    springBackground.values.damping = snapDamp;
    springBackground.set({ x: 50, y: 50 });

    // glareTest.value = 0;
  }, delay);
};

const popover = () => {
  nextTick(() => {
    if (!card.value) {
      console.error('Card element is not available.');
      return;
    }

    const rect = card.value.getBoundingClientRect(); // get element's size/position
    let delay = 100;
    let scaleW = (window.innerWidth / rect.width) * 0.9;
    let scaleH = (window.innerHeight / rect.height) * 0.9;
    let scaleF = 1.75;
    setCenter();
    if (firstPop.value) {
      delay = 1000;
      springRotateDelta.set({
        x: 360,
        y: 0,
      });
      firstPop.value = false;
    }

    springScale.set({ s: Math.min(scaleW, scaleH, scaleF) });
    interactEnd(null, delay);
  });
};

const retreat = () => {
  springScale.set({ s: 1 });
  springTranslate.set({ x: 0, y: 0 });
  springRotateDelta.set({ x: 0, y: 0 });
  interactEnd(null, 100);
};

const setCenter = () => {
  const rect = card.value.getBoundingClientRect(); // get element's size/position
  const view = document.documentElement; // get window/viewport size
  const delta = {
    x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
    y: round(view.clientHeight / 2 - rect.y - rect.height / 2),
  };
  springTranslate.set({
    x: delta.x,
    y: delta.y,
  });
};

// Watch for changes in 'active' prop
watch(
  () => props.active,
  (isActive, wasActive) => {
    if (isActive !== wasActive) {
      if (isActive) {
        popover();
      } else {
        retreat();
      }
    }
  }
);

const flipToBack = () => {
  springRotateDelta.values.stiffness = SPRING_R.stiffness;
  springRotateDelta.values.damping = SPRING_R.damping;
  springRotateDelta.set({
    x: 180,
    y: springRotateDelta.values.y,
  });
};

const flipToFront = () => {
  springRotateDelta.values.stiffness = SPRING_R.stiffness;
  springRotateDelta.values.damping = SPRING_R.damping;
  springRotateDelta.set({
    x: 0,
    y: springRotateDelta.values.y,
  });
};

// Watch for changes in 'backActive' prop
watch(
  () => props.backActive,
  (newBackActive) => {
    if (props.active) {
      if (newBackActive) {
        flipToBack();
      } else {
        flipToFront();
      }
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
  --glow: rgba(252, 7, 123, 0.3);
  z-index: calc(var(--s) * 100);
  transform: translate3d(0, 0, 0.1px);
  will-change: transform, visibility;
  transform-style: preserve-3d;
  width: 100%;
  height: auto;

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
      box-shadow: 0px 10px 30px 3px var(--glow);
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
