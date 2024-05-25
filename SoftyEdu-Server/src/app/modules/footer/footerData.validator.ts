import Joi from "joi";

// Define FooterInfo validation schema
const footerInfoValidationSchema = Joi.object({
  key: Joi.string(),
  school_name: Joi.string().max(35),
  short_description: Joi.string().max(100),
  location: Joi.string().max(60),
  contact_number: Joi.string().pattern(
    /^\+?\d{1,4}[\s-]?\(?\d+\)?[\s-]?\d+[\s-]?\d+$/
  ),
  email_address: Joi.string().email(),
});

export default footerInfoValidationSchema;
