import axios from "axios";

const defaultOptions = {
  baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
  headers: {
    common: {
      "Content-Type": "application/json"
    }
  }
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(config => {
  config.headers.token = localStorage.getItem("token");

  return config;
});

export default instance;
