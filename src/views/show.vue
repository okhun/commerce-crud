<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import { useDetails } from "@/composables/useDetail";

const { product, isLoading, handleProductDelete } = useDetails();
</script>

<template>
  <div class="container mx-auto min-h-screen bg-white py-10 px-4">
    <template v-if="!isLoading">
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-5 md:col-span-2 flex gap-2">
          <div>
            <img :src="product?.photo" class="w-full" alt="thumbnail" />
          </div>
        </div>
        <div class="col-span-5 md:col-span-3">
          <h3 class="text-2xl">{{ product?.title }}</h3>
          <p class="my-2">{{ product?.description }}</p>
          <div class="flex flex-col gap-2">
            <p>Brand: {{ product?.brand }}</p>
            <p>Price: {{ product?.price }}$</p>
          </div>
          <div class="flex gap-4 mt-4">
            <BaseButton @click="$router.push({ name: 'product_update' })"
              >Edit</BaseButton
            >
            <BaseButton class="bg-red-600" @click="handleProductDelete"
              >Delete</BaseButton
            >
          </div>
        </div>
      </div>
    </template>
    <div v-else class="flex justify-center"><p>Loading...</p></div>
  </div>
</template>
