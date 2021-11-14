import axiosClient from "./axios_client.js";

const userApi = {
  patchChangePass: (body) => {
    const url = "/user/changepassword";
    return axiosClient.patch(url, body);
  },

  patchForgetPass: (body) => {
    const url = "";
    return axiosClient.post(url, body);
  },

  patchUpdateInfoUser: (body) => {
    const url = "/user/updateinfo";
    return axiosClient.patch(url, body);
  },

  getPurchaseHistory: (params) => {
    const url = "/purchase/history/";
    return axiosClient.get(url, { params });
  },

  getPurchaseHistoryById: (params) => {
    const url = "/purchase/history/";
    return axiosClient.get(url, { params });
  },
};

export default userApi;
