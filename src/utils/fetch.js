import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rpms-web-server.onrender.com/'
})

export const AuthApi = axios.create({
    baseURL: 'https://rpms-web-server.onrender.com/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
