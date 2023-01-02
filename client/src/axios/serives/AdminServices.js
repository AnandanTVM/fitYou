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
  try {
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
  } catch (error) {
    const data = 'error';
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
export const trainerApprovel = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(
    `/trainerApprovel/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const uploadVideo = async (token, values) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  };
  const { data } = await axiosAdminInstance.post(
    '/uploadVideo',
    values,
    config
  );
  if (data.status) {
    return data;
  }
};
export const getActiveTrainerInfo = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get('/activeTrainerInfo', config);
  if (data.status) {
    return data;
  }
};
export const unBlockTrainer = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(
    `/unBlockTrainer/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const blockTrainer = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axiosAdminInstance.get(`/blockTrainer/${id}`, config);
  if (data.status) {
    return data;
  }
};
export const unBlockuserinfo = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get(
    `/unBlockuserinfo/${id}`,
    config
  );
  if (data.status) {
    return data;
  }
};
export const blockunsrinfo = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axiosAdminInstance.get(`/blockUserinfo/${id}`, config);
  if (data.status) {
    return data;
  }
};

export const addPlan = async (token, values) => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.post('/addPlan', values, config);
  if (data.status) {
    return data;
  }
};
export const getallPlans = async (token) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.get('/getallPlans', config);
  if (data.status) {
    return data;
  }
};
export const removePackage = async (token, id) => {
  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  };

  const { data } = await axiosAdminInstance.get(`/removePackage/${id}`, config);
  if (data.status) {
    return data;
  }
};
