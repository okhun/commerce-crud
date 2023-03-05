<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProducts } from "@/composables/useProducts";
import { useRouter } from "vue-router";

const { products, isLoading, total } = useProducts();
const router = useRouter();

const handleAddProduct = () => {
  router.push({ name: "product_create" });
};
</script>

<template>
  <div class="min-h-[300px] mx-auto bg-white">
    <BaseButton @click="handleAddProduct">Add new Product</BaseButton>
    <div class="p-4">
      <p class="text-2xl">Total products {{ total }}</p>
    </div>

    <template v-if="!isLoading">
      <div
        v-if="products.length"
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4"
      >
        <template v-for="product in products" :key="product.id">
          <router-link
            :to="{ name: 'product_show', params: { id: product.id } }"
          >
            <ProductCard :product="product" />
          </router-link>
        </template>
      </div>
      <div v-else class="flex justify-center">
        <p>Products list are empty</p>
      </div>
    </template>
    <div v-else class="flex justify-center">Loading...</div>
  </div>
</template>
