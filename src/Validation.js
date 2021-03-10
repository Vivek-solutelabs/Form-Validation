import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().min(2).required(),
  lastName: yup.string().min(2).required(),
  birthDate: yup.string().min(5).required(),
  address1: yup.string().min(5).required(),
  address2: yup.string().min(5).required(),
  pob: yup.string().min(2).required(),
  phoneNo: yup.number().required(),
});
