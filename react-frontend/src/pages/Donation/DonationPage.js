import jsCookie from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useNotification from "../../common/hooks/useNotification";

import { CustomButton } from "../../components/Button";
import { Layout } from "../../components/Layout/Layout";
import DonationCallTable from "../../components/Tables/DonationCallTable";
import DonationHistoryTable from "../../components/Tables/DonationHistoryTable";
import {
  getAllDonationCalls,
  getDaysUntilNextDonation,
  getDonationCallByBloodType,
  getDonationCallByBloodTypeAndCity,
  getDonationHistory,
} from "../../service/donationService";
import ModalAddRequest from "./AddDonationRequestModal";
import AppointmentModal from "./AppointmentsModal";
import "./index.css";

export const DonationPage = () => {
  const city = jsCookie.get("city");
  const role = jsCookie.get("Role");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [donationId, setDonationId] = useState(null);
  const [cityName, setCityName] = useState(null);

  const { user } = useSelector((state) => state.userData);

  const [data, setData] = useState([]);
  const [donationHistoryData, setDonationHistoryData] = useState([]);

  const [donationTime, setDonationTime] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [refresh2, setRefresh2] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (city) {
        response = await getDonationCallByBloodTypeAndCity(
          user.bloodType,
          city
        );
        jsCookie.remove("city");
        setData(response.data);
      } else {
        if (role === "user") {
          response = await getDonationCallByBloodType(user.bloodType);
          setData(response.data);
        } else {
          response = await getAllDonationCalls();
          setData(response.data);
        }
      }
    };
    fetchData();
  }, [refresh]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getDonationHistory(user.id);
      setDonationHistoryData(response.data);
      response = await getDaysUntilNextDonation(user.id);
      setDonationTime(response.data);
    };
    fetchData();
  }, [refresh2]);

  const openAppointmnetModal = (donId, city) => {
    setDonationId(donId);
    setCityName(city);
    setIsAppointmentModalOpen(true);
  };

  return (
    <Layout>
      <h1>Donations</h1>
      <br />
      <br />
      <br />
      <div className="div-add-button">
        <CustomButton
          text={"Add request"}
          secondary
          handleClick={() => setIsModalOpen(true)}
        />
      </div>
      <div>
        <DonationCallTable
          data={data}
          openAppModal={openAppointmnetModal}
          donationTime={donationTime}
        />
        <div stle={{ diplay: "flex", flexDirection: "row-reverse" }}>
          {donationTime > 0
            ? `Days until you can donate again: ${donationTime} days`
            : `You meet the requirements to donate again`}
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1>My donations</h1>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "900px",
        }}
      >
        <DonationHistoryTable data={donationHistoryData} />
      </div>
      {isModalOpen && (
        <ModalAddRequest
          open={isModalOpen}
          handleClose={() => {
            setIsModalOpen(false);
            setRefresh(!refresh);
          }}
        />
      )}
      {isAppointmentModalOpen && (
        <AppointmentModal
          open={isAppointmentModalOpen}
          handleClose={() => {
            setIsAppointmentModalOpen(false);
            setRefresh2(!refresh2);
          }}
          donationId={donationId}
          cityName={cityName}
        />
      )}
    </Layout>
  );
};
