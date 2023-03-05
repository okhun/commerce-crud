<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="mx-auto p-4 md:p-5 lg:p-6">
    <router-view />
  </div>
</template>
