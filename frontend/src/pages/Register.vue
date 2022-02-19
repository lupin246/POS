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
      <div class="errors">{{ store.state.message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
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

    return { formData, store, router };
  },

  methods: {
    async submitForm() {
      if (
        this.formData.password !== this.formData.password2 ||
        this.formData.password2.length < 1
      ) {
        console.log("Passwords do not match, or is blank");
        this.store.commit("setMessage", "Passwords do not match, or is blank");
      } else {
        this.store.dispatch("register", this.formData).then(() => {
          if (!this.store.state.isError) {
            const user: string | null = JSON.parse(
              localStorage.getItem("user")!
            );
            this.store.state.user = user;
            this.router.push("/");
          }
        });
      }
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
.form-field {
  padding: 0.75rem;
}

.form-field > label {
  font-size: 0.65rem;
  display: block;
}
</style>