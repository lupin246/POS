<template>
  <div>
    <h1>Main</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Product from "../types/Product";

export default defineComponent({
  name: "Main",
  //   components: {},
  setup() {
    const products = ref<Product[]>([]);
  },
});
</script>
