import Joi from "joi";
export const signupSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email().required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email không trống",
    "string.required": "Email thì cần thiết",
  }),
  password: Joi.string().required().min(6).messages({
    "string.empty": "Mật khẩu không trống",
    "any.required": "mật khẩu là bắt buộc",
    "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Mật khẩu không khớp",
    "string.empty": "Xác nhận mật khẩu không trống",
    "string.required": "Xác nhận mật khẩu là bắt buộc",
  }),
});
export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": 'Trường "email" không được để trống',
    "string.email": 'Trường "email" không đúng định dạng',
    "any.required": 'Trường "email" là bắt buộc',
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": 'Trường "mật khẩu" không được để trống',
    "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
    "any.required": "Trường mật khẩu là bắt buộc",
  }),
});