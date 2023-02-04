import getAxiosInstance from "./axiosInstance";

export const getAllCenters = async () => {
  try {
    const response = await getAxiosInstance().get(`/donationCenter/getAll`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getAllCentersCityName = async () => {
  try {
    const response = await getAxiosInstance().get(
      `/donationCenter/getAllCityNames`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
export const addCenter = async (user) => {
  try {
    const response = await getAxiosInstance().post(
      `/donationCenter/create`,
      user
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
