import axios from "axios";

const register = (name, email, password) => {
    return axios.post("/api/users/register", {
        name,
        email,
        password,
    })
}

const login = (email, password) => {
    return axios
        .post("/api/users/login", {email, password})
        .then((response) => {
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
}

const logout = () => {
    localStorage.removeItem("user");
}


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    register,
    login,
    logout,
    getCurrentUser,
}

