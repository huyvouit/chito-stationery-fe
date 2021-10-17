import axiosClient from "./axios_client.js";

const authApi = {
  postSignUp: (body) => {
    const url = "/user/signup";
    return axiosClient.post(url, body);
  },

  postSignIn: (body) => {
    const url = "/user/login";
    return axiosClient.post(url, body);
  },
};

export default authApi;
