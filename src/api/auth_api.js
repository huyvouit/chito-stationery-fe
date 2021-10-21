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

  verifyUser: () => {
    const url = "/user/auth";
    return axiosClient.get(url);
  },
};

export default authApi;
