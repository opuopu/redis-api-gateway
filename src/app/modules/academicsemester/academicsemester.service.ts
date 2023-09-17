
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
    const response:IGenericResponse   =  await HttpService.get('/academic-semesters',

    {
        params:req.params.id  
    })
    return response
}
export const AcademicSemsterServices ={
    insertIntoDb,
    getAllFromDb,
    getSingleById
}