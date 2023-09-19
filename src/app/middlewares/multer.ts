import multer from 'multer';
import { Request } from 'express';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
export const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2000000
  },
  fileFilter: (req: Request, file: Express.Multer.File, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only png, jpg, and jpeg files are allowed'));
    }
  }
});
