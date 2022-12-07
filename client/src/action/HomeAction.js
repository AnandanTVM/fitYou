import {
  axiosClientInstance,
  axiosHomeInstance,
  axiosAdminInstance,
} from '../axios/axios';
export const clientRegister = async (value) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosHomeInstance.post(
    '/clientRegister',
    value,
    config
  );
  if (data.status) {
    return data;
  }
};
export const trainerRegister = async (value) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosHomeInstance.post(
    '/trainerRegister',
    value,
    config
  );
  if (data.status) {
    return data;
  }
};

// Client Login action

export const clientLogin = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.post(
    '/clientLogin',
    value,
    config
  );
  if (data) {
    return data;
  }
};

// admin Login ACTION

export const adminLogin = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosAdminInstance.post('/adminLogin', value, config);
  if (data) {
    return data;
  }
};