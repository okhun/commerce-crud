<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: any;
    success?: boolean;
    error?: boolean;
    message?: string;
    type?: string;
    label?: string;
  }>(),
  { type: "text" }
);
const emit = defineEmits(["update:modelValue", "addClick"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const inputClass = computed(() => {
  if (props.error)
    return "border-red-500 focus:border-red-500 focus:ring-red-300";
  if (props.success)
    return "border-green-500 focus:border-green-500 focus:ring-green-300";
  if (!props.error && !props.success)
    return "border-gray-light focus:border-blue-900 focus:ring-blue-300";
  return "";
});
</script>

<template>
  <div class="relative w-full">
    <p class="p-2">{{ label }}</p>
    <textarea
      class="w-full border focus:outline-none py-4 pl-4 pr-10 rounded-2xl focus:outline-2 focus:ring-2 focus:ring-offset-none"
      :class="[inputClass]"
      :type="type"
      v-model="value"
    />
    <p class="text-red-500 m-1">{{ message }}</p>
  </div>
</template>
