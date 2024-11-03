import axios from "axios";
import React, { useContext } from "react";
import { DataContext } from "../context/AuthContext";

export default function AddUser() {
  const { token, baseUrl } = useContext(DataContext);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const phoneNumber = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await axios.post(
        baseUrl + "user/register",
        {
          phoneNumber,
          password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const res = await response.data;

      console.log(res);

      window.history.back();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="tel" name="phoneNumber" placeholder="Enter phoneNumber" />
      <input type="text" name="password" placeholder="Enter password" />

      <button>Add user</button>
    </form>
  );
}
