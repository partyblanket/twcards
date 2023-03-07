<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="sticky bg-red-200">
    <nav class="flex gap-4 p-5 text-green-600">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/study">Study</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
