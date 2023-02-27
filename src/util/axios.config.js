import axios from "axios";

const axiosApiInstance = axios.create();
console.log(process.env.NODE_ENV);
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:10000"
    : "https://mern-restaurant-backend.onrender.com";

axiosApiInstance.defaults.baseURL = url;
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
