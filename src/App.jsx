import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import SignUp from "./pages/SignUp";
import Navbar from "../src/components/Navbar.jsx";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/signup" element={<SignUp />} />;
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
