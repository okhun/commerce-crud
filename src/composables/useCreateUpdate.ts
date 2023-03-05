import { useField, useForm } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import { InferType, object, string } from "yup";
import { useProductStore } from "@/store/product";
import { onMounted, onUnmounted, ref } from "vue";
import { storeToRefs } from "pinia";

export const useCreateUpdate = () => {
  const router = useRouter();
  const route = useRoute();
  const { id } = route.params;
  const errorMessage = "Field is requied";
  const store = useProductStore();
  const { createProduct, getProduct, updateProduct } = store;
  const { product } = storeToRefs(store);
  const isUpdate = ref(route.name === "product_update" ? true : false);

  const formSchema = object({
    title: string().required(errorMessage),
    description: string().required(errorMessage),
    price: string().required(errorMessage),
    stock: string().required(errorMessage),
    photo: string().required(errorMessage),
    brand: string().required(errorMessage),
  });
  type FormType = InferType<typeof formSchema>;

  const { handleSubmit, resetForm } = useForm({
    validationSchema: formSchema,
    initialValues: product,
  });

  const title = useField<FormType["title"]>("title");
  const description = useField<FormType["description"]>("description");
  const price = useField<FormType["price"]>("price");
  const stock = useField<FormType["stock"]>("stock");
  const photo = useField<FormType["photo"]>("photo");
  const brand = useField<FormType["brand"]>("brand");

  onMounted(() => {
    if (isUpdate.value) {
      if (typeof id === "string") {
        getProduct(id);
      }
    }
  });

  onUnmounted(() => store.$reset());

  const handleResetForm = () => {
    resetForm();
  };

  const handleCreateCancel = () => {
    router.push({ name: "home" });
  };

  const handleFormSubmit = handleSubmit((values) => {
    if (isUpdate.value) {
      if (typeof id === "string") {
        updateProduct(id, values);
        router.push({ name: "product_show" });
      }
    } else {
      createProduct(values);
      handleResetForm();
      handleCreateCancel();
    }
  });

  return {
    title,
    description,
    price,
    stock,
    photo,
    brand,
    isUpdate,
    handleFormSubmit,
    handleCreateCancel,
  };
};
