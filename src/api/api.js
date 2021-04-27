import * as axios from "axios";

const  instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "80c040ea-0386-4435-8eea-3e5902ae03d3"
    }
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}