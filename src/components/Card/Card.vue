<template>
  <div
    class="card"
    :class="{ active, interacting, loading }"
    ref="card"
    :style="cardStyles"
    :data-number="number"
    :data-subtypes="subtypes"
    :data-supertype="supertype"
    :data-rarity="rarity"
    :data-gallery="gallery">
    <div class="card__translater">
      <button
        class="card__rotator"
        ref="rotator"
        @pointermove="interact"
        @mouseout="interactEnd"
        aria-label="Expand the Pokémon Card; {{ name }}.">
        <h1>{{ springBackground.values }}</h1>
        <img
          class="card__back"
          :src="back_img"
          alt="The back of a Pokémon Card" />
        <div class="card__front">
          <img
            :src="front_img"
            @load="imageLoader"
            :alt="`Front design of the ${name} Pokémon Card.`" />
          <card-shine :subtypes="subtypes" :supertype="supertype" />
          <card-glare :subtypes="subtypes" :rarity="rarity" />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { useSpring } from '@vueuse/motion';
import { clamp, round } from '@/helpers/Math';
import CardShine from '@/components/Card/CardShine.vue';
import CardGlare from '@/components/Card/CardGlare.vue';

const SPRING_R = { stiffness: 666, damping: 25 };
const SPRING_D = { stiffness: 333, damping: 45 };
const SNAP_SETTINGS = { stiffness: 0.01, damping: 0.06 };
const galaxyPosition = Math.floor(Math.random() * 1500);

export default {
  name: 'Card',
  components: { CardShine, CardGlare },
  props: {
    img: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: [Number, String], required: true },
    supertype: { type: String, required: true },
    subtypes: { type: [Array, String], required: true },
    rarity: { type: String, required: true },
    gallery: { type: Boolean, required: true },
    active: { type: Boolean, required: true },
  },
  data() {
    const back_img_url =
      'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg';

    return {
      firstPop: true,
      interacting: false,
      loading: true,
      back_img: back_img_url,
      front_img: '',
      springRotate: useSpring({ x: 0, y: 0 }, SPRING_R),
      springGlare: useSpring({ x: 50, y: 50, o: 0 }, SPRING_R),
      springBackground: useSpring({ x: 50, y: 50 }, SPRING_R),
      springTranslate: useSpring({ x: 0, y: 0 }, SPRING_D),
      springScale: useSpring({ s: 1 }, SPRING_D),
      glareTest: 0,
    };
  },
  computed: {
    cardStyles() {
      return `
        --mx: ${this.springGlare.values.x}%;
        --my: ${this.springGlare.values.y}%;
        --tx: ${this.springTranslate.values.x}px;
        --ty: ${this.springTranslate.values.y}px;
        --s: ${this.springScale.values.s};
        --o: ${this.springGlare.values.o};
        --rx: ${this.springRotate.values.x}deg;
        --ry: ${this.springRotate.values.y}deg;
        --pos: ${this.springBackground.values.x}% ${this.springBackground.values.y}%;
        --galaxybg: center ${galaxyPosition}px;
        --test: ${this.glareTest}%;
      `;
    },
  },
  created() {
    const baseUrl = this.img.startsWith('http')
      ? ''
      : 'https://images.pokemontcg.io/';
    this.front_img = baseUrl + this.img;
  },
  methods: {
    interact(e) {
      if (this.active) {
        this.interacting = true;
      }

      if (e.type === 'touchmove') {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
      }

      const { x, y, center } = this.calculatePointerPosition(e);

      this.updateSpring(this.springBackground, {
        x: round(50 + x / 4 - 12.5),
        y: round(50 + y / 3 - 16.67),
      });
      this.updateSpring(this.springRotate, {
        x: round(-(center.x / 3.5)),
        y: round(center.y / 2),
      });
      this.updateSpring(this.springGlare, { x, y, o: 1 });

      this.glareTest = x;
    },
    interactEnd(e, delay = 100) {
      console.log('interactEnd');
      setTimeout(() => {
        this.interacting = false;
        this.resetSprings();
      }, delay);
    },
    calculatePointerPosition(e) {
      const rect = e.target.getBoundingClientRect();
      const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
      const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
      const absolute = { x: clientX - rect.left, y: clientY - rect.top };
      const percent = {
        x: round((100 / rect.width) * absolute.x),
        y: round((100 / rect.height) * absolute.y),
      };
      return {
        x: percent.x,
        y: percent.y,
        center: { x: percent.x - 50, y: percent.y - 50 },
      };
    },
    updateSpring(spring, values) {
      spring.values.stiffness = SPRING_R.stiffness;
      spring.values.damping = SPRING_R.damping;
      spring.set(values);
    },
    resetSprings() {
      const resetValues = { x: 50, y: 50, o: 0 };
      this.springRotate.set({ x: 0, y: 0 });
      this.springGlare.set(resetValues);
      this.springBackground.set(resetValues);
      this.springScale.set({ s: 1 });
    },
    imageLoader() {
      this.loading = false;
    },
  },
  watch: {
    active(isActive) {
      isActive ? this._popover() : this._retreat();
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  background: var(--galaxybg, #000);
  transform: perspective(1000px) rotateX(var(--rx)) rotateY(var(--ry));
  transition:
    transform 0.1s,
    background 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

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
