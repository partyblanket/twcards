<script setup lang="ts">
// import Card from "./TheCard.vue";
import { useDeckStore } from "../stores/deck";

const store = useDeckStore();

store.useDefaultDeck();



</script>

<template>
  <div class="flex flex-col">
    <h1>hi</h1>
    <!-- <Card :v-if="card" :card="card" /> -->
  </div>
</template>
