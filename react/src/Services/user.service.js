import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/users/login";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
}

const getUserBoard = () => {
    return axios.get(API_URL)
}