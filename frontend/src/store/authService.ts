import axios, { AxiosStatic } from "axios";

const API_URL = "/api/users/";

const register = async (userData: any) => {
  const response: Promise<any> = axios
    .post(API_URL, userData)
    // .then(() => console.log("pending"))
    .then((response: any) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      return [];
    });
};

const authService = { register };

export default authService;
