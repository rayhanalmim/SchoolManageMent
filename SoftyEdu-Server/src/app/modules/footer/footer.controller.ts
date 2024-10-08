import { Request, Response } from "express";
import { FooterServices } from "./footer.service";
import { FooterInfo } from "./footer.interface";
import footerInfoValidationSchema from "./footerData.validator";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createData = catchAsync(async (req: Request, res: Response) => {
  const data: FooterInfo = req.body;

  const result = await FooterServices.createFooterDataIntoDB(data);

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

  const result = await FooterServices.getDataFromDB(key as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Footer Data fetched successfully!`,
    data: result,
  });
});

const updateData = catchAsync(async (req: Request, res: Response) => {
  const { key } = req.query;
  const data = req.body;

  const { error, value } = footerInfoValidationSchema.validate(data);
  console.log({ value });
  console.log({ error });

  if (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }

  if (!key) {
    return res.status(400).json({
      success: false,
      message: "Required Query Params: 'key'",
    });
  }

  const updatedData = await FooterServices.updateDataIntoDB(
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

export const FooterController = {
  createData,
  updateData,
  getData,
};
