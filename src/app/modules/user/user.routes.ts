import express from 'express';
import { userController } from './user.controller';
import { Request, Response, NextFunction } from 'express';
import { upload } from '../../middlewares/multer';
const router = express.Router();

router.post(
  '/create-student',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);

    return userController.createStudent(req, res, next);
  }
);

export const userRoutes = router;
