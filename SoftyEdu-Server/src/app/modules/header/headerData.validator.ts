import Joi from "joi";

// Define HeaderInfo validation schema
const headerInfoValidationSchema = Joi.object({
  key: Joi.string(),
  logo_url: Joi.string().uri(),
  school_name_in_bangla: Joi.string().max(35),
  school_name_in_english: Joi.string().max(35),
  eiin_number: Joi.number().integer().min(1).max(999999999),
  technical_code: Joi.number().max(99999),
  established: Joi.number().integer().min(1000).max(new Date().getFullYear()), // assuming established year is valid from 1000 to current year
});

export default headerInfoValidationSchema;
