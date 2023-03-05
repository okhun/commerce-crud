<script setup lang="ts"></script>

<template>
  <div class="sticky top-0 z-50 bg-white">
    <div
      class="flex justify-between items-center border-b border-dark-lighter p-3 md:p-4 lg:px-6"
    >
      <div class="flex items-center gap-4">
        <router-link :to="{ name: 'home' }" class="text-lg font-bold"
          >E-Commerce</router-link
        >
      </div>
    </div>
  </div>
</template>
