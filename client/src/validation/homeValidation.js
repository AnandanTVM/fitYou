import * as yup from 'yup';

//password rule
const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const link =
  /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

//scheema
export const userSchema = yup.object().shape({
  fname: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20)
    .required('Required'),
  lname: yup.string().min(1).max(20).required('Required'),
  dob: yup.date().required('Required'),
  gender: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
  password: yup
    .string()
    .min(5)
    .max(16)
    .matches(passwordRule, 'please Create a stronger password')
    .required('Required'),
  cpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
  weight: yup.number().positive().integer().required('Required'),
  height: yup.number().positive().integer().required('Required'),
});
export const userUpdateSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
});

export const trainerSchema = yup.object().shape({
  fname: yup
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(20)
    .required('Required'),
  lname: yup.string().min(1).max(20).required('Required'),
  dob: yup.date().required('Required'),
  gender: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  phone: yup
    .number('Phone number must be a 10 digit number')
    .positive()
    .integer()
    .required('Required'),
  password: yup
    .string()
    .min(5)
    .max(16)
    .matches(passwordRule, 'please Create a stronger password')
    .required('Required'),
  cpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Required'),
  link: yup
    .string()
    .matches(link, 'Please paste a valid youtube link here')
    .required('Required'),
});
export const uploadVideoSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, 'First name must be at least 2 characters')
    .max(50)
    .required('Required'),
  discretion: yup.string().min().max(200).required('Required'),
  type: yup.string().required('Required'),
  link: yup
    .string()
    .matches(link, 'Please paste a valid youtube link here')
    .required('Required'),
});
