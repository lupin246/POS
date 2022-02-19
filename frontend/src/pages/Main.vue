<template>
  <div>
    <h1>Main</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Product from "../types/Product";

export default defineComponent({
  name: "Main",
  components: {},
  setup() {
    const products = ref<Product[]>([]);
    const store = useStore();
    const router = useRouter();

    return { store, router };
  },
  mounted() {
    if (!this.store.state.user) {
      this.router.push("/login");
    }
  },
});
</script>
