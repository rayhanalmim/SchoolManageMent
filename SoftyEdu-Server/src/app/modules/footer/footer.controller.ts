import { Request, Response } from "express";
import { FooterServices } from "./footer.service";
import { FooterInfo } from "./footer.interface";
import footerInfoValidationSchema from "./footerData.validator";

const createData = async (req: Request, res: Response) => {
  try {
    const data: FooterInfo = req.body;

    const result = await FooterServices.createFooterDataIntoDB(data);
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

    const result = await FooterServices.getDataFromDB(key as string);

    res.status(200).json({
      success: true,
      message: `Footer Data fetched successfully!`,
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

export const FooterController = {
  createData,
  updateData,
  getData,
};
