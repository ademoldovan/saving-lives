import getAxiosInstance from "./axiosInstance";

export const getAllTopics = async () => {
  try {
    const response = await getAxiosInstance().get(`/topic/getAll`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addTopic = async (user) => {
  try {
    const response = await getAxiosInstance().post(`/topic/create`, user);
    return response;
  } catch (error) {
    return error.response;
  }
};
