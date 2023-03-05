<script setup lang="ts"></script>

<template>
  <div
    class="w-full min-h-screen flex justify-center items-center md:px-24 md:py-20 xl:px-40 xl:py-20"
  >
    <div
      class="w-full h-full bg-white flex flex-wrap flex-row justify-center items-center gap-8 rounded-lg py-4 px-10"
    >
      <div class="w-full max-w-md flex flex-col gap-4 text-center">
        <h1
          class="text-6xl md:text-8xl lg:text-9xl font-bold"
          data-test="error-type"
        >
          Error
        </h1>
        <p class="text-base text-dark-light" data-test="error-title">
          Something went very wrong
        </p>
        <h3 class="text-xl text-dark font-bold"></h3>
        <p class="text-sm text-dark-light" data-test="error-desc"></p>
        <div class="flex justify-center">
          <router-link class="bg-blue-500 p-2 rounded text-white" to="/"
            >Go to home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
