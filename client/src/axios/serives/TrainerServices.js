import { axiosAdminInstance } from '../axios';
 // need to change trainer base url
export const uploadVideo = async (token, values) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
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