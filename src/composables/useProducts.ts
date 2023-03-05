import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";
import { useProductStore } from "@/store/product";

export const useProducts = () => {
  const store = useProductStore();
  const { products, total, isLoadingAll: isLoading } = storeToRefs(store);
  const { getAllProducts } = store;

  onMounted(() => {
    getAllProducts();
  });

  onUnmounted(() => store.$reset());

  return { products, isLoading, total };
};
