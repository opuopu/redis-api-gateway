import axios, { AxiosInstance } from "axios";


const HttpService = (baseUrl:string):AxiosInstance =>{
    const instance  =  axios.create({
        baseURL:baseUrl,
        timeout:1000,
        headers:{
            'content-type':'application/json'
        }
    })
    instance.interceptors.request.use(
        (config)=>{
            return config
        },
(error)=>{
    return Promise.reject(error)
}
    )

    instance.interceptors.response.use(
        (response)=>{
            return response.data
        },
        (error)=>{
          return error
        }
    )
return instance
}