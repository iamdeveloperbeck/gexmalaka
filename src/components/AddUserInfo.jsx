import axios from "axios";
import React, { useContext } from "react";
import { DataContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";

export default function AddUserInfo() {
  const { token, baseUrl } = useContext(DataContext);
  const { userId } = useParams();
  const onSubmitForm = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    for (const item of data) {
      console.log(item);
    }

    try {
      const response = await axios.post(
        baseUrl + "info/create/" + userId,
        form,
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
      <input type="text" name="fullname" placeholder="Enter fullname" />
      <input
        type="text"
        name="specialization_course"
        placeholder="Enter specialization course"
      />
      <input
        type="text"
        name="diplom_number"
        placeholder="Enter diplom number"
      />
      <input
        type="text"
        name="certificate_number"
        placeholder="Enter certificate number"
      />
      <input type="date" name="studied_time" placeholder="Enter studied_time" />
      <input
        type="date"
        name="completed_time"
        placeholder="Enter completed_time"
      />
      <input type="file" name="avatar" />

      <button>Add user</button>
    </form>
  );
}
