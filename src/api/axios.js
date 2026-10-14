import axios from "axios";

const api = axios.create({
  baseURL: "https://test-backend.abdulrahman-hares.com",
});

export default api;