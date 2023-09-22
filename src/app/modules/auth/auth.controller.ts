import { Request, Response, NextFunction } from 'express';
import { authenticationService } from './auth.service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';
const LoginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authenticationService.LoginUser(req);
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    const { refreshToken, ...others } = result.data;
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'login sucessfully',
      data: others
    });
  } catch (err) {
    next(err);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authenticationService.refreshToken(req);
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
    const { refreshToken, ...others } = result.data;

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'new refreshToken generated',
      data: others
    });
  } catch (err) {
    next(err);
  }
};
const changeUserPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authenticationService.changePassword(req);
    console.log('result', result);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const authenticationController = {
  LoginUser,
  refreshToken,
  changeUserPassword
};
