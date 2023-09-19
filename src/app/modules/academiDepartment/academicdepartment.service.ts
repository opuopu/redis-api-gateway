import { IGenericResponse } from "../../../interfaces/common"
import { coreService as HttpService } from "../../../shared/axios"
import { Request } from "express"
const insertIntoDb =  async(req:Request):Promise<IGenericResponse> =>{

    const response:IGenericResponse    =  await HttpService.post('/academic-departments',req.body)
   
    return response
}


const getAllFromDb=async (req:Request):Promise<IGenericResponse>=>{
    const response:IGenericResponse   =  await HttpService.get('/academic-departments',

    {
        params:req.query  
    })
    return response
}
const updateOneFromDb =  async(req:Request):Promise<IGenericResponse> =>{

    const response:IGenericResponse    =  await HttpService.post(`/academic-departments/${req.params.id}`,req.body)
   
    return response
}

export const academicDepartmentservices ={
    insertIntoDb,
    getAllFromDb,
    updateOneFromDb,

}