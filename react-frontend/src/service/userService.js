import getAxiosInstance from "./axiosInstance";

export const getAllUsers = async () => {
  try {
    const response = await getAxiosInstance().get(`/user/getAll`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
export const updateUser = async (user) => {
  try {
    const response = await getAxiosInstance().put(`/user/updateUser`, user);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const addUser = async (user) => {
  try {
    const response = await getAxiosInstance().post(`/user/createUser`, user);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const login = async (user) => {
  try {
    const response = await getAxiosInstance().post(`/user/login`, user);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await getAxiosInstance().get(`/user/getUserById`, {
      params: { id: userId },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
