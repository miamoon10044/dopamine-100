<template>
  <div
    class="card rounded-3xl"
    :class="{ animated: isAnimated }"
    :style="cardStyle"
    @mousemove="onMouseMove"
    @mouseout="onMouseOut"
    @touchmove="onTouchMove"
    @touchend="onMouseOut"
    @touchcancel="onMouseOut">
    <video
      class="card-video p-2 rounded-xl bg-white border border-solid border-slate-600"
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline></video>

    <!-- <div class="shine-effect"></div> -->
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
    colors: {
      type: Object,
      default: () => ({
        color1: 'rgb(0, 231, 255)',
        color2: 'rgb(255, 0, 231)',
      }),
    },
  },
  data() {
    return {
      cardStyle: {},
      isAnimated: true,
      timeoutId: null,
    };
  },
  computed: {
    cardColors() {
      return {
        '--color1': this.colors.color1,
        '--color2': this.colors.color2,
        '--color3': this.colors.color3 || '',
        '--color4': this.colors.color4 || '',
        '--color5': this.colors.color5 || '',
      };
    },
  },
  methods: {
    onMouseMove(e) {
      let pos = [e.offsetX, e.offsetY];
      e.preventDefault();
      if (e.type === 'touchmove') {
        const rect = this.$el.getBoundingClientRect();
        pos = [
          e.touches[0].clientX - rect.left,
          e.touches[0].clientY - rect.top,
        ];
      }
      const l = pos[0];
      const t = pos[1];
      const h = this.$el.offsetHeight;
      const w = this.$el.offsetWidth;
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

      this.cardStyle = {
        '--gradPos': `${lp}% ${tp}%`,
        '--sprkPos': `${px_spark}% ${py_spark}%`,
        '--opc': `${p_opc / 100}`,
        transform: `rotateX(${ty}deg) rotateY(${tx}deg)`,
        ...this.cardColors,
      };
      this.isAnimated = false;
      if (e.type === 'touchmove') {
        return false;
      }
      clearTimeout(this.timeoutId);
    },
    onMouseOut() {
      this.cardStyle = { ...this.cardColors };
      this.timeoutId = setTimeout(() => {
        this.isAnimated = true;
      }, 2500);
    },
    onTouchMove(e) {
      this.onMouseMove(e);
    },
  },
  mounted() {
    this.cardStyle = { ...this.cardColors };
  },
};
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  z-index: 10;
  touch-action: none;
  border-radius: 5% / 3.5%;
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
  width: 71.5vw;
  height: 100vw;
  aspect-ratio: 5/7;
}

@media screen and (min-width: 600px) {
  .card {
    width: clamp(12.9vw, 61vh, 18vw);
    height: clamp(18vw, 85vh, 25.2vw);
  }
}

.card-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card::before,
.card::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
  pointer-events: none;
}

.card::before {
  background-position: 50% 50%;
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
  z-index: 1;
}

.card::after {
  opacity: 0.75;
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
  background-position: 50% 50%;
  background-size: 160%;
  background-blend-mode: overlay;
  z-index: 2;
  filter: brightness(1) contrast(1);
  mix-blend-mode: color-dodge;
}

.card:hover {
  box-shadow:
    -20px -20px 30px -25px var(--color1),
    20px 20px 30px -25px var(--color2),
    -7px -7px 10px -5px var(--color1),
    7px 7px 10px -5px var(--color2),
    0 0 13px 4px rgba(255, 255, 255, 0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5);
}

.card:hover::before {
  background-position: var(--gradPos, 50% 50%);
}

.card:hover::after {
  background-position: var(--sprkPos, 50% 50%);
  opacity: var(--opc, 0.75);
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
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: 0.88;
  filter: brightness(0.66) contrast(1.33);
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

/* Keyframes for animations */
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

.shine-effect {
  @apply absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    105deg,
    rgba(2, 0, 36, 0) 30%,
    rgba(226, 226, 228, 0.20354079131652658) 40%,
    rgba(255, 255, 255, 0.5984987745098039) 45%,
    rgba(224, 224, 224, 0.20354079131652658) 50%,
    rgba(0, 212, 255, 0) 60%
  );
  animation: shine 5s infinite ease-in-out;
  z-index: 2; /* Ensure shine is above the card background */
}

@keyframes shine {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(50%, 50%);
  }
}
</style>
