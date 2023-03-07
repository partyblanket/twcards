import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import defaultDeck from "../DEFAULT_DECKS/default_deck.json";

export const useDeckStore = defineStore("deck", () => {
  const deck: Ref<Deck> = ref({});

  function useDefaultDeck() {
    deck.value = defaultDeck as Deck;
  }

  return { deck, useDefaultDeck };
});
