import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import RegisterInitial from "./pages/registerInitial/RegisterInitial";
import RegisterDetail from "./pages/registerDetail/RegisterDetail";

import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token, userId } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={token ? <Home /> : <Login />} />

        <Route
          exact
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterInitial />}
        />
        <Route exact path="/register/:userId" element={<RegisterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
