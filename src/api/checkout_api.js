import axiosClient from "./axios_client.js";

const checkoutApi = {
  postCheckout: (body) => {
    const url = "/purchase/";
    return axiosClient.post(url, body);
  },
};

export default checkoutApi;
