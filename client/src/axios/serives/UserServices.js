import { axiosClientInstance } from '../axios';

export const getuserdetails = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get(
    `/getuserDetails/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const getFreeVideo = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get('/freeVideos', config);
  if (data.status) {
    return data;
  }
};
export const getallTrainerDetails = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get(
    '/getAllTrainerDetails',
    config
  );
  if (data.status) {
    return data;
  }
};
export const getPlanDetails = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get(
    `/grtPlanDetails/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
