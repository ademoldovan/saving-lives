import getAxiosInstance from "./axiosInstance";

export const createSubscription = async (subscr) => {
  try {
    const response = await getAxiosInstance().post(
      `/subscription/create`,
      subscr
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteSubscription = async (id) => {
  try {
    const response = await getAxiosInstance().delete(`/subscription/delete`, {
      params: { id },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};

export const checkSubscription = async (id) => {
  try {
    const response = await getAxiosInstance().get(
      `/subscription/checkSubscription`,
      {
        params: { id },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getSubscription = async (id) => {
  try {
    const response = await getAxiosInstance().get(
      `/subscription/getUserSubscription`,
      {
        params: { id },
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
