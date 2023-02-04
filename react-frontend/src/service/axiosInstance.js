import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
};
const defaultConfig = {
  baseURL: "http://localhost:8080/",
  headers: defaultHeaders,
};

const getAxiosInstance = () => {
  /*const token = getToken();

  if (token) {
    return axios.create({
      ...defaultConfig,
      headers: { ...defaultHeaders, Authorization: `Bearer ${token}` },
    });
  }*/
  return axios.create(defaultConfig);
};
export default getAxiosInstance;
