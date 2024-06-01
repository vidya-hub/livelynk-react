import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AuthScreen from "./screens/auth/auth_screen";
import HomePage from "./screens/home/home_page";
import NoPage from "./screens/no_page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route path="home" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
