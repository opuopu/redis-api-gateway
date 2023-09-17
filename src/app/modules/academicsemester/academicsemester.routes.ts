import express from 'express'
import { academicSemsesterController } from './academicsemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
const router  =  express.Router()
router.post('/',academicSemsesterController.insertIntoDb)
router.get('/',academicSemsesterController.getAllFromDb)
router.get('/:id',academicSemsesterController.getSingleById)
router.patch('/:id',auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN),academicSemsesterController.updateOneIntoDb)
export const academicSemesterRoute=router 


