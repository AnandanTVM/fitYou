import { axiosHomeInstance } from '../axios/axios';
export const clientRegister = async (value) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const { data } = await axiosHomeInstance.post(
        "/clientRegister",
        value,
        config
    );
    if (data.status) {
        return data


    }




}
export const trainerRegister = async (value) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const { data } = await axiosHomeInstance.post(
        "/trainerRegister",
        value,
        config
    );
    if (data.status) {
        return data


    }




}

