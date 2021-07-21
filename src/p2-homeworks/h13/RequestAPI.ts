import axios from 'axios'

const instance = axios.create({
    //baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
    /*withCredentials: true,
    headers: {
        'API-KEY': '8f2534e2-22a4-4052-894e-a66c04807482'
    }*/
})

export const requestAPI = {
    postRequest( value : boolean) {
        const promise = instance.post<any>('/test', { success : value})
        return promise
    }
}


// api
/*
export const todolistsAPI = {
    getTodolists() {
        const promise = instance.get<TodolistType[]>('todo-lists');
        return promise;
    },
 */
