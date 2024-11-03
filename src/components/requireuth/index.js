import React, { useContext } from "react";
import { DataContext } from "../../context/AuthContext";
import Layout from "../../layouts/Layout.jsx";
import { Navigate } from "react-router-dom";

export default function RequareAuth({ allowedRole }) {
  const { token, role } = useContext(DataContext);

  if (role === allowedRole && token) {
    return <Layout />;
  } else {
    return <Navigate to={"/"} />;
  }
}
