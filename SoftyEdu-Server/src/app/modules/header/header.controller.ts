import { Request, Response } from "express";
import { HeaderServices } from "./header.service";
import { HeaderInfoForUpdate } from "./header.interface";
import cloudinary from "../../config/cloudinary";
import fs from "fs";
import headerInfoValidationSchema from "./headerData.validator";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createData = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await HeaderServices.createHeaderDataIntoDB(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data created successfully!",
    data: result,
  });
});

const getData = catchAsync(async (req: Request, res: Response) => {
  const { key } = req.query;

  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Required Query Params: 'key'",
    });
  }

  const result = await HeaderServices.getDataFromDB(key as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Header Data fetched successfully!`,
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const { key } = req.query;
  const data: HeaderInfoForUpdate = req.body;

  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Require Query Params: 'key'",
    });
  }

  console.log(req.file);

  // --------------------------------upload image in cloudinary
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      data.logo_url = result.secure_url;

      // Delete the file from the server after uploading to Cloudinary
      fs.unlinkSync(req.file.path);
    } catch (uploadError) {
      console.error("Error uploading to Cloudinary:", uploadError);
      return res.status(500).json({
        success: false,
        message: "Failed to upload image to Cloudinary",
        error: uploadError,
      });
    }
  }

  // ----------------------------validate data using joi before update
  const { error, value } = headerInfoValidationSchema.validate(data);
  console.log({ value });
  console.log({ error });

  if (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }

  const updatedData = await HeaderServices.updateDataIntoDB(
    data,
    key as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Data updated successfully!",
    data: updatedData,
  });
});

export const HeaderController = {
  createData,
  updateData,
  getData,
};
