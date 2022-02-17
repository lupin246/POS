import { createStore } from "vuex";

const user: string | null = JSON.parse(localStorage.getItem("user") || "{}");

export default createStore({
  state: {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  mutations: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  actions: {},
  modules: {},
});
