import * as axios from 'axios'


let instance=axios.create({
    withCredentials:true,
    headers:{"API-KEY":"c2cdb074-1a0f-4aa6-aa89-c88c8d48593c"},
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
})


export const MainApi={
    setUsersApi(currentPage=1,pagesSize=5){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesSize}`, 
       ).then(response=>{return response.data})
    },
    follow(userId){
        return instance.post(`unfollow/${userId})`,{} ).then(response=>{return response.data})
    },
    unfollow(userId){
       return instance.delete(`follow/${userId})`).then(response=>{return response.data})

    },
    authMe(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    },
    login(email,password,rememberMe){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    showUsers(idUser){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+idUser)
    }
}

