import { Schema, model } from "mongoose";
import { FooterInfo } from "./footer.interface";

const footerInfoSchema = new Schema<FooterInfo>({
  key: { type: String, required: true },
  school_name: { type: String, required: true },
  short_description: { type: String, required: true },
  location: { type: String, required: true },
  contact_number: { type: String, required: true },
  email_address: { type: String, required: true },
});

const FooterInfoModel = model<FooterInfo>("footerInfo", footerInfoSchema);

export default FooterInfoModel;
