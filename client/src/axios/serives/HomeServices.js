import {
  axiosClientInstance,
  axiosHomeInstance,
  axiosAdminInstance,
  axiosTrainerInstance,
} from '../axios';
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
// Trainer Login action

export const trainerLogin = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosTrainerInstance.post(
    '/trainerLogin',
    value,
    config
  );
  if (data) {
    return data;
  }
};
// view all package to home page...
export const viewAllPlan = async () => {
  console.log('here');
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosHomeInstance.get('/viewAllPlan', config);
  if (data) {
    return data;
  }
};
// Client Otp Login

export const clientSendOtp = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.post(
    '/ClientSendOtp',
    value,
    config
  );
  if (data) {
    return data;
  }
};
export const clientVerifyOtp = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosClientInstance.post(
    '/clientVerifyOtp',
    value,
    config
  );
  if (data) {
    return data;
  }
};
// trainer Otp Login

export const trainerSendOtp = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosTrainerInstance.post(
    '/trainerSendOtp',
    value,
    config
  );
  if (data) {
    return data;
  }
};
export const trainerVerifyOtp = async (value) => {
  console.log(value);
  const config = {
    headers: {
      'content-type': 'application/json',
    },
  };
  const { data } = await axiosTrainerInstance.post(
    '/trainerVerifyOtp',
    value,
    config
  );
  if (data) {
    return data;
  }
};
