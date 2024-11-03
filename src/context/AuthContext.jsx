import React, { createContext, useState } from "react";
const DataContext = createContext(null);

export default function AuthContext({ children }) {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const baseUrl = "http://localhost:8000/v1/api/";
  return (
    <DataContext.Provider value={{ token, setToken, baseUrl, role, setRole }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
