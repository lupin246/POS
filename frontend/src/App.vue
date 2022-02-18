<template>
  <div class="container">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
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
  padding: 0 20px;
  text-decoration: none;
  color: blue;
}
</style>
