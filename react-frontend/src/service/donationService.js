import getAxiosInstance from "./axiosInstance";

export const getChartCity = async () => {
  try {
    const response = await getAxiosInstance().get(`/donation/cityDonations`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getChartBloodType = async () => {
  try {
    const response = await getAxiosInstance().get(
      `/donation/bloodTypeDonations`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDonationHistory = async (idUser) => {
  try {
    const response = await getAxiosInstance().post(
      `/donation/donationsHistory`,
      { idUser }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addDonationCall = async (user) => {
  try {
    const response = await getAxiosInstance().post(
      `/donationCall/create`,
      user
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getDonationCenters = async () => {
  try {
    const response = await getAxiosInstance().get(`/donationCenter/getAll`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDonationCallByBloodType = async (bloodType) => {
  try {
    const response = await getAxiosInstance().post(
      `/donationCall/getAllByBloodType`,
      {
        bloodType,
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllDonationCalls = async () => {
  try {
    const response = await getAxiosInstance().get(`/donationCall/getAll`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const addDonationAppointment = async (appointment) => {
  try {
    const response = await getAxiosInstance().post(
      `/appointment/create`,
      appointment
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const addDonation = async (appointment) => {
  try {
    const response = await getAxiosInstance().post(
      `/donation/create`,
      appointment
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getDonationCenterIdByDonationCenterCityName = async (cityName) => {
  try {
    const response = await getAxiosInstance().get(
      `/donationCenter/getByCityName`,
      { params: { cityName } }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getDaysUntilNextDonation = async (idUser) => {
  try {
    const response = await getAxiosInstance().get(
      `/donation/numberOfDaysUntilNextDonation`,
      { params: { id: idUser } }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getDonationCallByBloodTypeAndCity = async (bloodType, city) => {
  try {
    const response = await getAxiosInstance().post(
      `/donationCall/getAllByBloodTypeAndCity`,
      {
        bloodType,
        city,
      }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
