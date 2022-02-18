<template>
  <div>
    <h1>Register</h1>
    <div>
      <form @submit.prevent="submitForm">
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
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import User from "../types/User";
import authService from "../store/authService";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Register",
  setup() {
    const store = useStore();
    const router: any = useRouter();
    const formData = ref<User>({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    watch(store.state, (currentStore, oldStore) => {
      if (currentStore.isError) {
        console.log("error occurred: `${currentStore.message}`");
      }
    });

    return { formData, store, router };
  },
  methods: {
    submitForm() {
      if (
        this.formData.password !== this.formData.password2 ||
        this.formData.password2.length < 1
      ) {
        console.log("Passwords do not match, or is blank");
      } else {
        this.store.dispatch("register", this.formData);

        // @TODO only allow redirect on success
        if (this.store.state.user) {
          this.router.push("/");
        }
      }
    },

    resetState() {
      this.store.dispatch("reset");
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