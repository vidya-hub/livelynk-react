import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthScreen from "./screens/auth/auth_screen";
import HomePage from "./screens/home/home_page";
import NoPage from "./screens/no_page";

export default function App() {
  const userId = localStorage.getItem("userId");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={userId || userId === "0" ? <HomePage /> : <AuthScreen />}
        />
        <Route path="auth" element={<AuthScreen />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
