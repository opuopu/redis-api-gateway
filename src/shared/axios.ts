import axios, { AxiosInstance } from "axios";
import config from "../config";


export const HttpService = (baseUrl:string):AxiosInstance =>{
    const instance  =  axios.create({
        baseURL:baseUrl,
        timeout:1000,
        headers:{
            'content-type':'application/json'
        }})
    instance.interceptors.request.use(
        (config)=>{
            return config
     },
(error)=>{
    return error
}
    )

    instance.interceptors.response.use(
        (response)=>{
            return response.data
        },
        (error)=>{
          return Promise.reject(error)
        }
    )
return instance
}
export const authService  =  HttpService(config.auth_service_url)
export const coreService  =  HttpService(config.core_service_url)
