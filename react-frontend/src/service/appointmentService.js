import { SubscriptionsOutlined } from "@mui/icons-material";
import getAxiosInstance from "./axiosInstance";

export const getAllAppointments = async (idDonationCall) => {
  try {
    const response = await getAxiosInstance().post(
      `/appointment/getAllByDonationCall`,
      { idDonationCall }
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteAppointment = async (id) => {
  try {
    const response = await getAxiosInstance().delete(`/appointment/delete`, {
      params: id,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
