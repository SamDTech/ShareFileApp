import { NextFunction, Request, Response, Router } from "express";
import asyncHandler from "express-async-handler";
import multer from "multer";
import AppError from "../utils/appError";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import File from "../model/file";

const router = Router();

const storage = multer.diskStorage({});

const upload = multer({
  storage,
});

router.post(
  "/upload",
  upload.single("myFile"),
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      return next(new AppError(400, "Sorry! we need a file"));
    }

    const upload = await cloudinary.uploader.upload(req.file.path, {
      folder: "shareMe",
      resource_type: "auto",
    });

    if (!upload) {
      return next(new AppError(400, "cloudinary error"));
    }

    // grab name of file
    const { originalname } = req.file;
    const { secure_url, bytes, format } = upload;

    const file = await File.create({
      filename: originalname,
      sizeInBytes: bytes,
      secureUrl: secure_url,
      format,
    });

    res.status(201).json({
      id: file._id,
      downloadPageLink: `${process.env.API_BASE_ENDPOINT_CLIENT}/download/${file._id}`,
    });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const file = await File.findById(id);

    if (!file) {
      return next(new AppError(404, "File not found"));
    }

    const { filename, format, sizeInBytes } = file;

    res.status(200).json({
      name: filename,
      sizeInBytes,
      format,
      id,
    });
  })
);

export default router;
