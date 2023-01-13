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
export const placeOdder = async (token, value) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.post('/placeOdder', value, config);
  if (data.status) {
    return data;
  }
};
export const orderVerifiyPayment = async (token, res, order) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const value = {};
  value.res = res;
  value.order = order;
  const { data } = await axiosClientInstance.post(
    '/verifiyPayment',
    value,
    config
  );
  if (data.status) {
    return data;
  }
};
export const getClientPlan = async (token, id) => {
  console.log(id);
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get(
    `/getClientPlan/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const getVideo = async (token, id) => {
  console.log('in api');
  console.log(id);
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.get(
    `/getVideo/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
