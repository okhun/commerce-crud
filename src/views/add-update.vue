<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";
import { useCreateUpdate } from "@/composables/useCreateUpdate";

const {
  title,
  description,
  price,
  stock,
  photo,
  brand,
  isUpdate,
  handleFormSubmit,
  handleCreateCancel,
} = useCreateUpdate();
</script>

<template>
  <div class="flex justify-center">
    <form class="shadow-lg p-4">
      <BaseInput
        v-model="title.value.value"
        label="Title"
        placeholder="Enter product name"
        :success="title.meta.valid && title.meta.dirty"
        :error="!title.meta.valid && !!title.errorMessage.value"
        :message="title.errorMessage.value"
      />
      <div class="flex gap-4">
        <BaseInput
          v-model="price.value.value"
          label="Price"
          type="number"
          placeholder="Enter product price"
          :success="price.meta.valid && price.meta.dirty"
          :error="!price.meta.valid && !!price.errorMessage.value"
          :message="price.errorMessage.value"
        />
        <BaseInput
          v-model="stock.value.value"
          label="Stock"
          type="number"
          placeholder="Enter number of products"
          :success="stock.meta.valid && stock.meta.dirty"
          :error="!stock.meta.valid && !!stock.errorMessage.value"
          :message="stock.errorMessage.value"
        />
      </div>
      <BaseInput
        v-model="brand.value.value"
        label="Brand"
        placeholder="Enter product brand"
        :success="brand.meta.valid && brand.meta.dirty"
        :error="!brand.meta.valid && !!brand.errorMessage.value"
        :message="brand.errorMessage.value"
      />
      <BaseInput
        v-model="photo.value.value"
        label="Photo url"
        placeholder="Enter product photo url"
        :success="photo.meta.valid && photo.meta.dirty"
        :error="!photo.meta.valid && !!photo.errorMessage.value"
        :message="photo.errorMessage.value"
      />
      <BaseTextArea
        v-model="description.value.value"
        label="Description"
        placeholder="Enter product description"
        :success="description.meta.valid && description.meta.dirty"
        :error="!description.meta.valid && !!description.errorMessage.value"
        :message="description.errorMessage.value"
      />
      <div class="flex justify-between mt-6">
        <BaseButton @click="handleCreateCancel">Cancel</BaseButton>
        <BaseButton @click="handleFormSubmit"
          >{{ isUpdate ? "Update" : "Create" }}
        </BaseButton>
      </div>
    </form>
  </div>
</template>
