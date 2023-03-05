import { defineStore } from "pinia";
import { useGet, usePost, useUpdate } from "@/api/fetch";

interface Product {
  brand?: string;
  description?: string;
  id?: number;
  price?: string;
  stock?: string;
  photo?: string;
  title?: string;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    product: {} as Product | undefined,
    isLoading: false,
    loading: { all: true, one: true },
    total: 0,
  }),
  getters: {
    isLoadingAll: (state) => state.loading.all,
    isLoadingOne: (state) => state.loading.one,
  },
  actions: {
    getAllProducts() {
      this.loading.all = true;
      this.products = useGet("all");
      this.total = this.products.length;
      this.loading.all = false;
    },
    getProduct(url: string) {
      this.loading.one = true;
      this.product = useGet(url);
      this.loading.one = false;
    },
    createProduct(payload: Product) {
      usePost(payload);
    },
    updateProduct(id: string, payload: Product) {
      useUpdate(id, payload);
    },
  },
});
