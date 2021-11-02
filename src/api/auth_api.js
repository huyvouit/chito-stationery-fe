import axiosClient from "./axios_client.js";

const authApi = {
  postSignUp: (body) => {
    const url = "/auth/signup";
    return axiosClient.post(url, body);
  },

  postSignIn: (body) => {
    const url = "/auth/login";
    return axiosClient.post(url, body);
  },

  verifyUser: () => {
    const url = "/auth";
    return axiosClient.get(url);
  },
};

export default authApi;
