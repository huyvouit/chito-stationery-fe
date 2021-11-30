import axios from "axios";
import queryString from "query-string";
import { TOKEN_NAME, REFTOKEN } from "../constants/constant";
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

const getNewTokenAndReattemptRequest = async (config, refToken) => {
  try {
    const getNewToken = await axios.post(
      "https://chito-stationery.herokuapp.com/auth/refresh",
      {
        refreshToken: refToken,
      }
    );
    // console.log("đã refresh: ", getNewToken);
    const { accessToken, refreshToken } = getNewToken.data;
    localStorage.setItem(TOKEN_NAME, accessToken);
    localStorage.setItem(REFTOKEN, refreshToken);
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
    return await axios(config);
  } catch (err) {
    // console.log(err);
    return Promise.reject(err);
  }
};

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const {
      config,
      config: { validateStatus },
      response: { status },
    } = error;
    if (validateStatus()) {
      console.log("validateStatus");
      return error;
    }
    if (status === 401) {
      // console.log("401");
      const refreshToken = localStorage.getItem(REFTOKEN);
      if (refreshToken)
        return getNewTokenAndReattemptRequest(config, refreshToken);
      else {
        // console.log("chưa có refreshToken");
        return;
      }
    }
    if (status === 404) {
      // console.log("404 error");
      return;
    }

    throw error;
  }
);
export default axiosClient;
