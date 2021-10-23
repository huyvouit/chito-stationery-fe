import axiosClient from "./axios_client.js";

const productApi = {
  getAll: () => {
    const url = "/product/";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
