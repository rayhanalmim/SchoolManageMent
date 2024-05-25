import { Request, Response } from "express";
import { HeaderServices } from "./header.service";
import { HeaderInfoForUpdate } from "./header.interface";
import cloudinary from "../../config/cloudinary";
import fs from "fs";
import headerInfoValidationSchema from "./headerData.validator";

const createData = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const result = await HeaderServices.createHeaderDataIntoDB(data);
    res.status(200).json({
      success: true,
      message: "Data created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getData = async (req: Request, res: Response) => {
  try {
    const { key } = req.query;

    if (!key) {
      return res.status(400).json({
        success: false,
        message: "Required Query Params: 'key'",
      });
    }

    const result = await HeaderServices.getDataFromDB(key as string);

    res.status(200).json({
      success: true,
      message: `Header Data fetched successfully!`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

const updateData = async (req: Request, res: Response) => {
  try {
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
    res.status(200).json({
      success: true,
      message: "Data updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error,
    });
  }
};

export const HeaderController = {
  createData,
  updateData,
  getData,
};
