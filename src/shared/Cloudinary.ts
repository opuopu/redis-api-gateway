import { v2 as cloudinary } from 'cloudinary';
import httpStatus from 'http-status';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'dmtto8o5m',
  api_key: '191144247764143',
  api_secret: '__wkLbe_vNKFV4238MIb_OTVUe8'
});

export const uploadToCloundinary = async (imagePath: string) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true
  };
  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    if (result) {
      // Attempt to remove the local file
      try {
        fs.unlinkSync(imagePath);
      } catch (unlinkError) {
        console.error('Failed to delete local file:', unlinkError);
      }
    }
    return result;
  } catch (err) {
    throw new Error('failed to upload image');
  }
};

export default uploadToCloundinary;
