import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "9b6aada9-34d3-4135-a32f-7e9aacf37623"}
});//instance axios


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    myAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}



