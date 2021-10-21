import axiosClient from "./axios_client.js";

const productApi = {
  getAll: () => {
    const url = "/product/";
    return axiosClient.get(url);
  },

  getById: (params) => {
    const url = `/product`;
    return axiosClient.get(url, { params });
  },

  getBySearch: (params) => {
    const url = `/product/search`;
    return axiosClient.get(url, { params });
  },
};

export default productApi;
