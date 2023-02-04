import React, { useState } from "react";
import useNotification from "../../common/hooks/useNotification";
import { CustomButton } from "../../components/Button";
import { Layout } from "../../components/Layout/Layout";
import CenterTable from "../../components/Tables/CenterTable";
import { CustomTextField } from "../../components/TextField";
import { addTopic } from "../../service/topicService";
import "./index.css";

export const TopicPage = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    dateAdded: "",
  });
  const { showNotification } = useNotification();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await addTopic({ ...state, dateAdded: new Date() });
    if (response.status >= 200 && response.status < 300) {
      showNotification({
        severity: "success",
        message: "Topic posted successfully!",
      });
    } else {
      showNotification({
        severity: "error",
        message: "Something went wrong posting the topic!",
      });
    }
  };
  const handleInputChanges = (field, value) => {
    setState({ ...state, [field]: value });
  };

  return (
    <Layout>
      <h1>Topics</h1>
      <br />
      <br />
      <br />

      <form onSubmit={(e) => handleSubmit(e)} className="">
        <div className="dada">
          <div className="divul">
            <CustomTextField
              required
              label={"Title"}
              value={state.title}
              handleChange={(e) => handleInputChanges("title", e.target.value)}
            />
            <CustomTextField
              required
              label={"Description"}
              value={state.description}
              multiline
              handleChange={(e) =>
                handleInputChanges("description", e.target.value)
              }
            />
          </div>
          <div className="butonul">
            <CustomButton text="Submit" submit secondary />
          </div>
        </div>
      </form>
    </Layout>
  );
};
