import axios from "axios";

const BASE_URL = "https://maps-tari.herokuapp.com/api/";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});