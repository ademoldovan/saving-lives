import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import UserTable from "../../components/Tables/UserTable";
import { getAllUsers } from "../../service/userService";

export const UserPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllUsers();

      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <h1>Users</h1>
      <br />
      <br />
      <br />
      <UserTable data={data} refreshUI={() => getAllUsers()} />
    </Layout>
  );
};
