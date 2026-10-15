import { Routes, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Counter from "./components/Counter.jsx";
import Orders from "./components/Orders";
import Home from "./Home";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout.jsx";
import Login from "./components/Login";
function App() {
  // const [user, setUser] = useState({
  //   name: "Arjun",
  //   email: "arjun@example.com",
  // });

  return (
    <>
      {/* <Counter /> */}
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          </Route>
        </Routes>
      
    </>
  )
}

export default App;
