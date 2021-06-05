import { Request, Response, Router } from 'express';
import asyncHandler from 'express-async-handler';
import multer from 'multer';

const router = Router();

const storage = multer.diskStorage({});

const upload = multer({
  storage,
});

router.post(
  '/upload',
  upload.single('myFile'),
  asyncHandler(async (req: Request, res: Response) => {
      if(!req.file){
          
      }
  })
);

export default router;
