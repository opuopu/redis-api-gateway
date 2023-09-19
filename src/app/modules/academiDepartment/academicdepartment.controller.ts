import { Request,Response,NextFunction } from "express"
import { academicDepartmentservices } from "./academicdepartment.service"
import sendResponse from "../../../shared/response"

const insertIntoDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
const result  = await academicDepartmentservices.insertIntoDb(req)

  sendResponse(res,result)

    }
    catch(err){
    
       
  next(err)
        
    }
}
const getAllFromDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const result  =  await academicDepartmentservices.getAllFromDb(req)
  sendResponse(res,result)
    }
    catch(err){
        next(err)
    }
}
const updateOneIntoDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const result  =  await academicDepartmentservices.updateOneFromDb(req)
  sendResponse(res,result)

    }
    catch(err){
        console.log(err)
        next(err)
    }
}

export const academicDeprtmentController = {
    insertIntoDb,
    getAllFromDb,
    updateOneIntoDb
}