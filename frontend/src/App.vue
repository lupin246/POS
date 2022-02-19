<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!store.state.user">Login</router-link>
      <router-link to="/register" v-if="!store.state.user"
        >Register</router-link
      >
      <a @click="logout" v-if="store.state.user">Logout</a>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    const router = useRouter();

    return { store, router };
  },
  methods: {
    async logout() {
      await this.store.dispatch("logout");
      this.router.push("/login");
    },
  },
});
</script>

<style>
.container {
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a {
  padding: 0 10px;
  margin: 0 10px;
  text-decoration: none;
  color: blue;
}

a:hover {
  cursor: pointer;
}
</style>
