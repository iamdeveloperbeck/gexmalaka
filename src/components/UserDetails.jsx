import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../context/AuthContext";
import axios from "axios";

import { RiLogoutCircleLine } from "react-icons/ri";

export default function UserDetails() {
  const [data, setData] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();
  const { token, baseUrl, role } = useContext(DataContext);

  const getData = async () => {
    const target = role === "admin" ? userId : "me";
    try {
      const response = await axios(baseUrl + "info/" + target, {
        headers: {
          Authorization: token,
        },
      });

      const res = response.data;
      setData(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-[30px]">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><RiLogoutCircleLine /> Chiqish</button>
        <h1 className="text-2xl font-extrabold">Ma'lumotlar</h1>
      </div>
      <div className="flex items-start gap-5 mt-[40px] sm:flex-col">
        <img src={data.avatar} alt="avatar" className="rounded w-36 h-36 object-cover" />
        <div className=" flex flex-col gap-2">
          <p><strong>F.I.SH:</strong> {data.fullname}</p>
          <p><strong>Telefon raqami:</strong> {data.phoneNumber}</p>
          <p><strong>Diplom raqami:</strong> {data.diplom_number}</p>
          <p><strong>O'qigan vaqti:</strong> {data?.studied_time?.split("T")[0]}</p>
          <p><strong>Tugatgan vaqti:</strong> {data?.completed_time?.split("T")[0]}</p>
          <p><strong>Malaka oshirgan yo'nalishi:</strong> {data.specialization_course}</p>
          <p><strong>Sertifikat raqami:</strong> {data.certificate_number}</p>
        </div>
      </div>
    </div>
  );
}