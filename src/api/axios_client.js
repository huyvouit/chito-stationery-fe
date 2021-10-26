import axios from "axios";
import queryString from "query-string";
import { TOKEN_NAME } from "../constants/constant";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
  baseURL: "https://chito-stationery.herokuapp.com/", //process.env.
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    const token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => err
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
