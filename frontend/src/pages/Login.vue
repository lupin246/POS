<template>
  <div>
    <h1>Login</h1>
    <div>
      <form @submit.prevent="submit">
        <div class="form-field">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="formData.email"
          />
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
import User from "../types/User";

export default defineComponent({
  name: "Login",
  setup() {
    const formData = ref<User>({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    return { formData };
  },
  methods: {
    submit() {
      // this.count++;
      this.formData.email = "test";
    },
  },
});
</script>

<style>
</style>