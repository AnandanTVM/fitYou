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
    .min(5, 'password should contain 5-16 characters')
    .max(16, 'password should contain 5-16 characters')
    .matches(passwordRule, 'Please create a stronger password')
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
  discretion: yup.string().min(4).max(200).required('Required'),
  type: yup.string().required('Required'),
  thumbnail: yup.mixed().required('Required'),
  // .test("FILE_ SIZE", "Too bigt!", (value)=> value && value < 2024 * 2024)
  // .test ("FILE_TYPE", "Invalid!", (value) => value && ['Image/png', 'Image/jpeg'].includes(value.type))
  link: yup
    .string()
    .matches(link, 'Please paste a valid youtube link here')
    .required('Required'),
});
export const trainerBaseSchema = yup.object().shape({
  aadharNumber: yup.number().positive().integer().required('Required'),
  address: yup.string().min(4).max(500).required('Required'),

  profilePic: yup.mixed().required('Required'),
  aadharBack: yup.mixed().required('Required'),
  aadharFront: yup.mixed().required('Required'),
});
export const newPlanSchema = yup.object().shape({
  PackageName: yup
    .string()
    .min(2, 'Enter a valid package name.')
    .max(20)
    .required('Required'),

  packageType: yup.string().required('Required'),
  discretion: yup
    .string()
    .min(2, 'Enter a valid discretion name.')
    .max(200)
    .required('Required'),
  proGymsTips: yup.string().required('Required'),
  groupWorkouts: yup.string().required('Required'),
  perstionalTrainer: yup.string().required('Required'),
  smartWorkoutPlan: yup.string().required('Required'),
  mrp: yup.number().positive().integer().required('Required'),
  offerRate: yup.number().positive().integer().required('Required'),
});
