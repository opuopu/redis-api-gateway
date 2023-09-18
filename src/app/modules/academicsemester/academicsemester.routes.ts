import express from 'express'
import { academicSemsesterController } from './academicsemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { AcademicSemesterValidation } from './academicsemester.validation'
const router  =  express.Router()
router.post('/', 
validateRequest(AcademicSemesterValidation.create),
// auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN), 
academicSemsesterController.insertIntoDb)

router.get('/',academicSemsesterController.getAllFromDb)
router.get('/:id',academicSemsesterController.getSingleById)
router.patch('/:id',validateRequest(AcademicSemesterValidation.update),
// auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),
academicSemsesterController.updateOneIntoDb)
export const academicSemesterRoute=router 


