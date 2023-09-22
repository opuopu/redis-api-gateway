import express from 'express';
import { authenticationController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { authZodSchema } from './auth.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();
router.post(
  '/login',
  validateRequest(authZodSchema.loginZodSchema),
  authenticationController.LoginUser
);
router.post('/refresh-token', authenticationController.refreshToken);
router.post(
  '/change-password',
  validateRequest(authZodSchema.changePasswordZodSchema),
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  authenticationController.changeUserPassword
);
export const authenticationRoutes = router;
