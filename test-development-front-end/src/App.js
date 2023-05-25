import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserSearch from "./components/UserSearch";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute
              isAllowed={localStorage.getItem("accessToken")}
              redirectTo="/"
              children={<UserSearch />}
            />
          }
        />
        <Route
          path="/users/:username"
          element={
            <ProtectedRoute
              isAllowed={localStorage.getItem("accessToken")}
              redirectTo="/"
              children={<UserProfile />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;