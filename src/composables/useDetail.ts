import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/store/product";
import { useDelete } from "@/api/fetch";

export const useDetails = () => {
  const store = useProductStore();
  const { product, isLoadingOne: isLoading } = storeToRefs(store);
  const { getProduct } = store;
  const route = useRoute();
  const router = useRouter();
  const { id } = route.params;

  onMounted(() => {
    if (typeof id === "string") getProduct(id);
  });

  onUnmounted(() => store.$reset());

  const handleProductDelete = () => {
    if (typeof id === "string") {
      useDelete(id);
      router.push({ name: "home" });
    }
  };

  return {
    product,
    isLoading,
    handleProductDelete,
  };
};
