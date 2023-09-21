import { NextFunction, Request, Response } from 'express';
import uploadToCloundinary from '../../../shared/Cloudinary';
import { userServices } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const studentPhoto = await uploadToCloundinary(req?.file?.path!);
    if (studentPhoto) {
      req.body.profileImage = studentPhoto.secure_url;
    }
    const result = await userServices.createStudent(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createStudent
};
