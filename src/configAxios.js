import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3001",
    timeout: 5000
});

export default axiosInstance;
