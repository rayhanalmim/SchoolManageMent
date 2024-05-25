import { FooterInfo, FooterInfoForUpdate } from "./footer.interface";
import FooterInfoModel from "./footer.model";

const createFooterDataIntoDB = async (data: FooterInfo) => {
  const result = await FooterInfoModel.create(data);
  return result;
};

const updateDataIntoDB = async (data: FooterInfoForUpdate, key: string) => {
  const result = await FooterInfoModel.findOneAndUpdate(
    { key: key },
    { $set: data },
    { new: true }
  );
  return result;
};

const getDataFromDB = async (key: string) => {
  const result = await FooterInfoModel.findOne({ key });
  return result;
};

export const FooterServices = {
  createFooterDataIntoDB,
  updateDataIntoDB,
  getDataFromDB,
};
