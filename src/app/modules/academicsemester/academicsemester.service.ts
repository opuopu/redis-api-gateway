
import httpStatus from "http-status"
import ApiError from "../../../errors/apiError"
import { coreService as HttpService} from "../../../shared/axios"
import { IGenericResponse } from "../../../interfaces/common"
import {Request} from 'express'

const insertIntoDb =  async(req:Request):Promise<IGenericResponse> =>{

    const response:IGenericResponse    =  await HttpService.post('/academic-semesters',req.body,{
        headers:{
            Authorization:req.headers.authorization
        }
    })
   

    return response
}

const getAllFromDb=async (req:Request):Promise<IGenericResponse>=>{
    const response:IGenericResponse   =  await HttpService.get('/academic-semesters',

    {
        params:req.query  
    })
    return response
}
const getSingleById=async (req:Request):Promise<IGenericResponse>=>{
    const response:IGenericResponse   =  await HttpService.get(`/academic-semesters/${req.params.id}`,

    )
    return response
}
const updateIntoDb=async (req:Request):Promise<IGenericResponse>=>{
    const response:IGenericResponse   =  await HttpService.patch(`/academic-semesters/${req.params.id}`,
    req.body,
    {
        headers:{
            Authorization:req.headers.authorization
        }
    })
    console.log("response here")
    return response
}
export const AcademicSemsterServices ={
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    updateIntoDb
}