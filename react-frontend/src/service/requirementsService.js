import getAxiosInstance from "./axiosInstance";

export const getRequirements = async () => {
  try {
    const response = await getAxiosInstance().get(`/requirement/get`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateRequirements = async (user) => {
  try {
    const response = await getAxiosInstance().post(`/requirement/update`, user);

    return response;
  } catch (error) {
    return error.response;
  }
};
