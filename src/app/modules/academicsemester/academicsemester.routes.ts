import express from 'express'
import { academicSemsesterController } from './academicsemester.controller'
const router  =  express.Router()
router.post('/',academicSemsesterController.insertIntoDb)
router.get('/',academicSemsesterController.getAllFromDb)
router.get('/:id',academicSemsesterController.getSingleById)



export const academicSemesterRoute=router 


