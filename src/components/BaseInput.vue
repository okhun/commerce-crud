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
    placeholder?: string;
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

const isNumber = (event: KeyboardEvent) => {
  if (props.type === "number") {
    const keysAllowed: string[] = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
    ];
    const keyPressed: string = event.key;
    if (!keysAllowed.includes(keyPressed)) {
      event.preventDefault();
    }
  }
};
</script>

<template>
  <div class="relative w-full">
    <p class="p-2">{{ label }}</p>
    <input
      class="w-full border focus:outline-none py-4 pl-4 pr-10 rounded-2xl focus:outline-2 focus:ring-2 focus:ring-offset-none"
      :class="[inputClass]"
      :type="type"
      v-model="value"
      :placeholder="placeholder"
      @keypress="isNumber($event)"
    />
    <p class="text-red-500 m-1">{{ message }}</p>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
input[type="number"] {
  appearance: textfield;
}
</style>
