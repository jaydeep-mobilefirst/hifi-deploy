import React from "react";
import Signin from "./pages/auth/Signin";
import AuthCode from "./pages/auth/AuthCode";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Signup from "./pages/auth/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/auth-code" element={<AuthCode />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
