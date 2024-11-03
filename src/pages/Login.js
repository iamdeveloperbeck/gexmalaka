import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import image from "../assets/image";

import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

export default function Login() {
  const { setToken, baseUrl, setRole } = useContext(DataContext);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    phoneNumber: null,
    password: null,
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        baseUrl + inputs.role + "/login",
        inputs
      );

      const res = await response.data;

      setToken(res?.token);
      setRole(res?.role);

      if (res?.token) {
        navigate("/" + res?.role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="w-full flex items-center justify-center p-[20px_0]">
          <img src={image.Logo} className="w-[100px] object-cover" />
        </div>
      </div>
      <div className="relative w-full h-screen flex items-center justify-center text-center flex-col sm:p-[0_10px]">
        <div className="border p-[30px_60px] rounded-[15px] sm:p-[20px_40px]">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-2xl">Kirish</h1>
          <form onSubmit={onSubmitForm} className="flex flex-col items-center gap-2">
            <div className="flex items-start flex-col">
              <label className="block text-sm font-medium text-gray-900">Login:</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="Login kiriting"
                className="bg-gray-50 border w-[220px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              />
            </div>
            <div className="flex items-start flex-col">
              <label className="block text-sm font-medium text-gray-900">Parol:</label>
              <div className="bg-gray-50 border w-[220px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 flex items-center justify-between">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      password: e.target.value,
                    })
                  }
                  placeholder="Parolni kiriting"
                  className="bg-transparent outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>
            <select
              onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option value={"user"}>Malaka oshirgan</option>
              <option value={"admin"}>O'qituvchi</option>
            </select>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Kirish</button>
          </form>
        </div>
        <p className="mt-3 text-gray-500">Sizga markaz tomonidan berilgan login va parolni kiriting!</p>
      </div>
    </>
  );
}