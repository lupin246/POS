import { AxiosError } from 'axios';
import { createStore } from 'vuex';
import authService from './authService';

const user: string | null = JSON.parse(localStorage.getItem('user')!);

export default createStore({
  state: {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  },
  mutations: {
    reset(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    setMessage(state, message: string) {
      state.message = message;
    },
  },
  actions: {
    reset({ commit }) {
      commit('reset');
    },
    async register({ commit }, user) {
      try {
        // console.log("registering");
        this.state.isError = false;

        return await authService.register(user);
      } catch (error: AxiosError | any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        this.state.isError = true;
        this.state.message = message;
      }
    },
    async login({ commit }, user) {
      try {
        // console.log("registering");
        this.state.isError = false;

        return await authService.login(user);
      } catch (error: AxiosError | any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        this.state.isError = true;
        this.state.message = message;
      }
    },
    async logout({ commit }) {
      try {
        // console.log("registering");
        this.state.user = null;
        return await authService.logout();
      } catch (error: AxiosError | any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(message);
        this.state.isError = true;
        this.state.message = message;
      }
    },
  },
});
