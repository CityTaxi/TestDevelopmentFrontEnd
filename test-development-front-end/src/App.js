import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserSearch from "./components/UserSearch";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;