import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mt-5">

        <div className="text-center mb-4">
          <Link to="/" className="btn btn-primary me-2">
            Register
          </Link>

          <Link to="/forgot-password" className="btn btn-warning">
            Forgot Password
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;
