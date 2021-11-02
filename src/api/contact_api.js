import axiosClient from "./axios_client.js";

const contactApi = {
  postContact: (body) => {
    const url = "/contact/add";
    return axiosClient.post(url, body);
  },
};

export default contactApi;
