<template>
  <div>
    <h1>Register</h1>
    <div>
      <form @submit.prevent="submit">
        <div class="form-field">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="formData.name" />
        </div>
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
        <div class="form-field">
          <label for="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            v-model="formData.password2"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import User from "../types/User";

export default defineComponent({
  name: "Register",
  setup() {
    const store: any = useStore();
    const formData = ref<User>({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    // const count = ref(0);

    return { formData, store };
  },
  methods: {
    submit() {
      // this.count++;
      this.formData.email = "test";
    },

    resetState() {
      this.store.commit("reset");
    },
  },
});
</script>

<style>
.form-field {
  padding: 0.75rem;
}

.form-field > label {
  font-size: 0.65rem;
  display: block;
}
</style>