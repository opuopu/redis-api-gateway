import express from 'express';
import { authenticationController } from './auth.controller';
const router = express.Router();
router.post('/login', authenticationController.LoginUser);
router.post('/refresh-token', authenticationController.refreshToken);
export const authenticationRoutes = router;
