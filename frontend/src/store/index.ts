import { AxiosError } from "axios";
import { createStore } from "vuex";
import authService from "./authService";

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
  actions: {
    reset({ commit }) {
      commit("reset");
    },
    async register({ commit }, user) {
      try {
        console.log("registering");

        return await authService.register(user);
      } catch (error: AxiosError | any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        this.state.message = message;
      }
    },
  },
  modules: {},
});
