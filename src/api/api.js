import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'd47f47ea-76ce-4d5b-be66-09ce2e4900ed',
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,

})

export const UserAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
             return response.data;
         })
     },
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status }).then((response) => response.data);
    }
}

export const authAPI = {
    getHeader () {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}