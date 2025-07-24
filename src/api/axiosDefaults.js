import axios from "axios";

axios.defaults.baseURL = 'https://game-of-feeds-50ff6d853852.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

