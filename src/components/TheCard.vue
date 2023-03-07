<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  card: CardType;
}>();

const showAnswer = ref(true);

function flipCard() {
  showAnswer.value = !showAnswer.value;
}

const spacedButtons = computed(() => {
  const buttons = [0];
  [1, 2, 3].forEach((multiplier) => {
    buttons.push(props.card.interval * multiplier);
  });
  return buttons;
});

</script>

<template>
  <div class="card-wrapper flex flex-col place-self-center">
    <div class="card" :class="{ flipped: showAnswer }" @click="flipCard">
      <div class="face front">
        <div>Front</div>
        <div>{{ props.card.tw }}</div>
      </div>
      <div class="face back">
        <div>Back</div>
        <div>{{ props.card.tl }}</div>
        <div>{{ props.card.zh }}</div>
      </div>
    </div>
    <div class="flex items-stretch">
      <!-- Spaced Repition Buttons -->
      <template v-if="showAnswer">
        <button v-for="btn in spacedButtons" :key="btn" class="grow">
          {{ btn }}
        </button>
      </template>
      <!-- Show Answer -->
      <button v-else class="grow">Show Answer</button>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  width: 300px;
}
/* all card flip css credit to: https://codepen.io/Ossoona/pen/GJmvmJ */
.card {
  @apply my-10 flex w-full items-center justify-center rounded-lg shadow-md shadow-gray-500;
  height: 500px;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
}

.face {
  @apply absolute h-full w-full rounded-xl p-2;
  backface-visibility: hidden;
  background-color: whitesmoke;
}

.back {
  transition: all 0.5s linear;
  transform: rotateY(180deg);
}

.back::before {
  @apply absolute -z-10 h-full w-full;
  content: "";
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
