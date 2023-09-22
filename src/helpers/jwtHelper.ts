import httpStatus from 'http-status';
import { verify } from 'jsonwebtoken';
import config from '../config';
import ApiError from '../errors/apiError';

const verifyToken = (token: string) => {
  try {
    const isVerified = verify(token, config.jwt.secret);
    console.log('isVerified', isVerified);
    return isVerified as any;
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid token');
  }
};

export const JwtHelper = {
  verifyToken
};
