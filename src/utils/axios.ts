import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://85.31.237.120:8089/api/v1",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Response Error:", error.response?.status, error.response?.data);
        return Promise.reject(error);
    }
);

export { axiosInstance };