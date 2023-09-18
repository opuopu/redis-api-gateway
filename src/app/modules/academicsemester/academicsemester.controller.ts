import { NextFunction,Request,Response } from "express";
import { AcademicSemsterServices } from "./academicsemester.service";
import sendResponse from "../../../shared/response";
import httpStatus from "http-status";

const insertIntoDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
const result  = await AcademicSemsterServices.insertIntoDb(req)
console.log("result....",result)
  sendResponse(res,result)

    }
    catch(err){
    
       
  next(err)
        
    }
}

const getAllFromDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const result  =  await AcademicSemsterServices.getAllFromDb(req)
  sendResponse(res,result)
    }
    catch(err){
        next(err)
    }
}
const getSingleById =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const result  =  await AcademicSemsterServices.getAllFromDb(req)
  sendResponse(res,result)
    }
    catch(err){
        next(err)
    }
}
const updateOneIntoDb =  async(req:Request,res:Response,next:NextFunction)=>{
    try{
  const result  =  await AcademicSemsterServices.updateIntoDb(req)
  sendResponse(res,result)

    }
    catch(err){
        console.log(err)
        next(err)
    }
}
export const academicSemsesterController  = {
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    updateOneIntoDb
}

