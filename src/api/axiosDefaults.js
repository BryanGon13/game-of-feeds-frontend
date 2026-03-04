import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/";
axios.defaults.withCredentials = true;

// Don't force multipart globally (set it only on upload requests)
// axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();
export const axiosRes = axios.create();
