import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/AuthContext";
import axios from "axios";
import UserLists from "../../components/UserLists";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { token, baseUrl } = useContext(DataContext);

  const getData = async () => {
    try {
      const response = await axios(baseUrl + "user", {
        headers: {
          Authorization: token,
        },
      });

      const res = response.data;
      console.log(res);

      setData(res.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <button type="button" onClick={() => navigate("add")}>
        Add User
      </button>

      <UserLists data={data || []} />
    </div>
  );
}
