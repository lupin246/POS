<template>
  <div>
    <h1>Login</h1>
    <div>
      <form @submit.prevent="submitForm">
        <div class="form-field">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" v-model="formData.email" />
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="formData.password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import User from "../types/User";

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const router: any = useRouter();
    const formData = ref({
      email: "",
      password: "",
    });

    return { formData, store, router };
  },

  methods: {
    async submitForm() {
      this.store.dispatch("login", this.formData).then(() => {
        if (!this.store.state.isError) {
          const user: string | null = JSON.parse(localStorage.getItem("user")!);
          this.store.state.user = user;
          this.resetState();
          this.router.push("/");
        }
      });
    },

    resetState() {
      this.store.dispatch("reset");
    },
  },
  mounted() {
    this.resetState();
  },
});
</script>

<style>
</style>