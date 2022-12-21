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
