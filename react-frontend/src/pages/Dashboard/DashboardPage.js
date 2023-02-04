import {
  Alert,
  Button,
  IconButton,
  MenuItem,
  Snackbar,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chart from "../../components/Chart";
import { Layout } from "../../components/Layout/Layout";
import { getAllCentersCityName } from "../../service/centerService";
import { getChartBloodType, getChartCity } from "../../service/donationService";
import { getAllTopics } from "../../service/topicService";
import "./index.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import {
  checkSubscription,
  createSubscription,
  deleteSubscription,
  getSubscription,
} from "../../service/subscriptionService";
import { useNavigate } from "react-router-dom";
import jsCookie from "js-cookie";
import useNotification from "../../common/hooks/useNotification";

export const DashboardPage = () => {
  const role = jsCookie.get("Role");
  const { user } = useSelector((state) => state.userData);
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [cityNames, setCityNames] = useState([]);
  const [bloodChartData, setBloodChartData] = useState([]);
  const [cityChartData, setCityChartData] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const { showNotification } = useNotification();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTopics();
      setData(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChartBloodType();
      let newArray = response.data?.map(({ bloodType, numberOfDonations }) => ({
        name: bloodType,
        pv: numberOfDonations,
        amt: 2100,
      }));

      setBloodChartData(newArray);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChartCity();
      let newArray = response.data?.map(({ city, numberOfDonations }) => ({
        name: city,
        pv: numberOfDonations,
        amt: 2100,
      }));
      setCityChartData(newArray);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCentersCityName();
      let newArray = response.data?.map(({ city }) => ({
        label: city,
        value: city,
      }));

      setCityNames(newArray);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let response = await checkSubscription(user.id);
      setIsSubscribed(response.data);
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSubscription(user.id);
      response.data ? setState(response.data) : setState("");
    };
    fetchData();
  }, [user]);

  const subscribe = async () => {
    if (state && user.id) {
      const response = await createSubscription({
        idUser: user.id,
        city: state,
      });

      if (response.data) {
        showNotification({
          severity: "success",
          message: "Subcribed successfully!",
        });
        setIsSubscribed(true);
      } else {
        showNotification({
          severity: "error",
          message: "Could not subscribe!",
        });
      }
    }
  };
  const unsubscribe = async () => {
    if (user.id) {
      let response = await deleteSubscription(user.id);

      if (response.data) {
        showNotification({
          severity: "success",
          message: "Unsubcribed successfully!",
        });
        setIsSubscribed(false);
        setState("");
      } else {
        showNotification({
          severity: "error",
          message: "Could not unsubscribe!",
        });
      }
    }
  };

  return (
    <Layout>
      <h1>Welcome, {user.name}!</h1>
      <br />
      <br />
      <br />
      <h1>Topics</h1>
      <div className="news">
        {data.map((item, index) => {
          return (
            <div id={`news_${index}`} class="noutate noutate4">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <h1>Subscription</h1>
      <div style={{ display: "flex", alignItems: "center", width: "400px" }}>
        <TextField
          select
          fullWidth
          label="City"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ paddingRight: "16px" }}
        >
          {cityNames.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {isSubscribed ? (
          <Tooltip title="Unsubscribe">
            <IconButton onClick={() => unsubscribe()}>
              <NotificationsOffIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Subscribe">
            <IconButton onClick={() => subscribe()}>
              <NotificationsActiveIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
      {isSubscribed && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            jsCookie.set("city", state);
            navigate("/donations");
          }}
        >
          Click here to view matching donation calls.
        </div>
      )}
      <br />
      <br />
      <br />
      {role === "admin" && (
        <>
          <h1>Charts</h1>
          <div className="modal-imobil">
            <Chart data={bloodChartData} />
            <Chart data={cityChartData} />
          </div>
        </>
      )}
    </Layout>
  );
};
