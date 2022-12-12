import { axiosAdminInstance } from '../axios';

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
export const getTrainerApprovel = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get('/trainerApprovel', config);
  if (data.status) {
    return data;
  }
};
export const getTrainerdetails = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(
    `/getTrainerDetails/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const getuserdetails = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(
    `/getuserDetails/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const trainerReject = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(`/trainerReject/${id}`, config);
  if (data.status) {
    return data;
  }
};
