import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "9b6aada9-34d3-4135-a32f-7e9aacf37623"}
});//instance axios


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
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
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status : status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
    },
    saveProfile(profile) {
        return instance.put('/profile', profile)
    }
}

export const authAPI = {
    myAuth() {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`,{email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}





