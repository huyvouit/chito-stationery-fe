import axiosClient from "./axios_client.js";

const productApi = {
  getAll: () => {
    const url = "/product/";
    return axiosClient.get(url);
  },

  getByFilter: (params) => {
    const url = "/product/filter";
    return axiosClient.get(url, { params });
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
