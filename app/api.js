import axios from "axios";

// create an axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:8000", // replace with your backend URL
});

// export the api instance for use in your components
export default api;
