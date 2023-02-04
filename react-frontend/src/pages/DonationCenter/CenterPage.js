import jsCookie from "js-cookie";
import React, { useEffect, useState } from "react";
import useNotification from "../../common/hooks/useNotification";
import { CustomButton } from "../../components/Button";
import { Layout } from "../../components/Layout/Layout";
import CenterTable from "../../components/Tables/CenterTable";
import { CustomTextField } from "../../components/TextField";
import { addCenter, getAllCenters } from "../../service/centerService";
import "./index.css";

export const CenterPage = () => {
  const role = jsCookie.get("Role");
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    name: "",
    address: "",
    city: "",
  });
  const [refresh, setRefresh] = useState(false);
  const { showNotification } = useNotification();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllCenters();

      setData(response.data);
    };
    fetchData();
  }, [refresh]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addCenter(state);
    if (response.status >= 200 && response.status < 300) {
      showNotification({
        severity: "success",
        message: "Center created successfully!",
      });
      setState({
        name: "",
        address: "",
        city: "",
      });
      setRefresh(!refresh);
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong creating the new center!",
      });
    }
  };
  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };

  return (
    <Layout>
      <h1>Donation centers</h1>
      <br />
      <br />
      <br />
      <div className="page">
        <div className="tabelul">
          <CenterTable data={data} refreshUI={() => getAllCenters()} />
        </div>

        {role === "admin" && (
          <form onSubmit={(e) => handleSubmit(e)} className="formul-center">
            <CustomTextField
              required
              label={"Name"}
              value={state.name}
              handleChange={(e) => handleInputChanges("name", e.target.value)}
            />
            <CustomTextField
              required
              label={"Address"}
              value={state.address}
              handleChange={(e) =>
                handleInputChanges("address", e.target.value)
              }
            />
            <CustomTextField
              required
              label={"City"}
              value={state.city}
              handleChange={(e) => handleInputChanges("city", e.target.value)}
            />
            <div className="butonul">
              <CustomButton
                text="Submit"
                submit
                secondary
                handleClick={handleSubmit}
              />
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};
