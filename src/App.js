import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import RequareAuth from "./components/requireuth";
import Dashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/user/Dashboard";
import AddUser from "./components/AddUser";
import FindDiplom from "./pages/FindDiplom";
import AddUserInfo from "./components/AddUserInfo";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/diplom" element={<FindDiplom />} />

        <Route path="/admin" element={<RequareAuth allowedRole={"admin"} />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddUser />} />
          <Route path=":userId/addinfo" element={<AddUserInfo />} />
          <Route path=":userId/view" element={<UserDetails />} />
        </Route>

        <Route path="/user" element={<RequareAuth allowedRole={"user"} />}>
          <Route index element={<UserDashboard />} />
          <Route path="add" element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
