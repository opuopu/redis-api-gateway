import express from 'express'
import { academicDeprtmentController } from './academicdepartment.controller'

const router  = express.Router()


router.post('/',academicDeprtmentController.insertIntoDb)

router.get('/',academicDeprtmentController.getAllFromDb)
router.patch('/',academicDeprtmentController.updateOneIntoDb)



export const academicdepartmentRoutes =  router