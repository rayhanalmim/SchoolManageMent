import { HeaderInfo, HeaderInfoForUpdate } from "./header.interface";
import HeaderInfoModel from "./header.model";

const createHeaderDataIntoDB = async (data: HeaderInfo) => {
  const result = await HeaderInfoModel.create(data);
  return result;
};

const updateDataIntoDB = async (data: HeaderInfoForUpdate, key: string) => {
  const result = await HeaderInfoModel.findOneAndUpdate(
    { key: key },
    { $set: data },
    { new: true }
  );
  return result;
};

const getDataFromDB = async (key: string) => {
  const result = await HeaderInfoModel.findOne({ key });
  return result;
};

export const HeaderServices = {
  createHeaderDataIntoDB,
  updateDataIntoDB,
  getDataFromDB,
};
