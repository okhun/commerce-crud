<script setup lang="ts">
defineProps<{
  product: {
    brand?: string;
    description?: string;
    id?: number;
    price?: string;
    stock?: string;
    title?: string;
    photo?: string;
  };
}>();
</script>

<template>
  <div
    class="border bg-white hover:shadow-lg hover:scale-105 duration-200 rounded"
  >
    <img
      v-if="product.photo"
      :src="product.photo"
      :alt="product.title"
      class="w-full max-h-80"
    />
    <div class="p-4">
      <p>Brand: {{ product.brand }}</p>
      <p>{{ product?.description }}</p>
    </div>
  </div>
</template>
