import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserLists({ data }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>UserLists</h1>

      <ul>
        {data?.map((user, index) => (
          <li key={index}>
            {user.phoneNumber}{" "}
            {user.isInfoCreate ? (
              <button onClick={() => navigate(`${user._id}/view`)}>
                info view
              </button>
            ) : (
              <button onClick={() => navigate(`${user._id}/addinfo`)}>
                Add info
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
