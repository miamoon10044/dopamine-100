<template>
  <div class="card__glare" :class="classes"></div>
</template>

<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  subtypes: {
    type: Array,
    required: true,
  },
  rarity: {
    type: String,
    required: true,
  },
});

// Computed classes
const classes = computed(() => `${props.rarity} ${props.subtypes.join(' ')}`);
</script>

<style lang="scss" scoped>
.card__glare {
  transform: translateZ(1.4px);
  background: radial-gradient(
    farthest-corner circle at var(--mx) var(--my),
    rgba(255, 255, 255, 0.8) 10%,
    rgba(255, 255, 255, 0.65) 20%,
    rgba(0, 0, 0, 0.5) 90%
  );
  mix-blend-mode: overlay;
  opacity: var(--o);
}

.card__glare.holo:not(.v):not(.vmax):not(.vstar) {
  opacity: calc(var(--o) * 0.8);
  filter: brightness(0.8) contrast(1.5);
}

.card__glare.v,
.card__glare.vfull,
.card__glare.vmax,
.card__glare.vstar {
  filter: brightness(0.9) contrast(1.75);
  background: radial-gradient(
    farthest-corner circle at var(--mx) var(--my),
    rgb(255, 255, 255) 0%,
    rgba(133, 137, 141, 0.33) 45%,
    rgba(100, 100, 100, 0.65) 120%
  );
  opacity: calc(var(--o) * 0.66);
}

.card__glare.vmax {
  background: radial-gradient(
    farthest-corner circle at var(--mx) var(--my),
    rgba(255, 255, 255, 0.75) 0%,
    rgba(99, 99, 99, 0.35) 45%,
    rgba(0, 0, 0, 1) 120%
  );
}
</style>
