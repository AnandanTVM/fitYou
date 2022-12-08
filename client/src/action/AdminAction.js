import { axiosAdminInstance } from '../axios/axios';

export const getUserInfo = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get('/userInfo', config);
  if (data.status) {
    return data;
  }
};
export const updateUserInfo = async (token, values) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.post(
    '/updateUserInfo',
    values,
    config
  );
  if (data.status) {
    return data;
  }
};
