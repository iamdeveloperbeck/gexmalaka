import axios from "axios";
import React, { useState } from "react";
import { loopData } from "../utils/helper";

export default function FindDiplom() {
  const [diplomNumber, setDiplomNumber] = useState("");
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:8000/v1/api/info/finddiplom";

  const getData = async () => {
    try {
      const response = await axios(baseUrl + "/" + diplomNumber);

      const res = response.data;

      setData(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>FindDiplom</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData();
        }}
      >
        <input
          type="text"
          placeholder="Enter diplom number"
          onChange={(e) => setDiplomNumber(e.target.value)}
          required
        />

        <button>Search</button>
      </form>

      <div>
        {data ? (
          <>
            <ul>{loopData(data)?.map((temp) => temp)}</ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
