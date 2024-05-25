import { Schema, model } from "mongoose";
import { HeaderInfo } from "./header.interface";

const headerInfoSchema = new Schema<HeaderInfo>({
  key: { type: String, required: true },
  logo_url: { type: String, required: true },
  school_name_in_bangla: { type: String, required: true },
  school_name_in_english: { type: String, required: true },
  eiin_number: { type: Number, required: true },
  technical_code: { type: Number, required: true },
  established: { type: Number, required: true },
});

const HeaderInfoModel = model<HeaderInfo>("headerDatas", headerInfoSchema);

export default HeaderInfoModel;
