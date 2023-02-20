import axios from 'axios';

export const axiosHomeInstance = axios.create({
  baseURL: `${process.env.REACT_APP_HOME_URL}`,
});
export const axiosClientInstance = axios.create({
  baseURL: `${process.env.REACT_APP_CLIENT_URL}`,
});
export const axiosAdminInstance = axios.create({
  baseURL: `${process.env.REACT_APP_ADMIN_URL}`,
});
export const axiosTrainerInstance = axios.create({
  baseURL: `${process.env.REACT_APP_TRAINER_URL}`,
});
