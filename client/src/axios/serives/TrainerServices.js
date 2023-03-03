import { axiosTrainerInstance } from '../axios';
// need to change trainer base url
export const uploadVideo = async (token, values) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.post(
      '/uploadVideo',
      values,
      config
    );
    if (data.status) {
      return data;
    }
  } catch (error) {
    const data = error;
    return data;
  }
};

export const trainerDetailsUpdate = async (token, values) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.post(
      '/trainerDetailsUpdate',
      values,
      config
    );
    if (data.status) {
      return data;
    }
  } catch (error) {
    const data = error;
    return data;
  }
};
export const getAllClientInfo = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.get(
      '/getAllAllotedClientDetails',
      config
    );

    return data;
  } catch (err) {
    return err;
  }
};
export const getClientDetails = async (token, id) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.get(
      `/getClientDetails/${id}`,
      config
    );

    return data;
  } catch (err) {
    return err;
  }
};
export const getAllMessage = async (token, ClId) => {
  try {
    console.log('here in get message');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axiosTrainerInstance.get(
      `/getMessage/${ClId}`,
      config
    );
    console.log('all message');
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const sendMessage = async (token, ClId, values) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
    const value = { message: values };
    const { data } = await axiosTrainerInstance.post(
      `/sendMessage/${ClId}`,
      value,
      config
    );

    return data;
  } catch (err) {
    console.log('on error');

    return err;
  }
};
export const trainerProfile = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axiosTrainerInstance.get('/profile', config);
    console.log(data);
    return data;
  } catch (err) {
    console.log('on error');

    return err;
  }
};
