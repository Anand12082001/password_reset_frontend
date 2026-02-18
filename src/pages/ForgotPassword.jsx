import React, { useState } from "react";
import API from "../api/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/forgot-password", { email });
      alert(res.data.message);
     
    } catch (err) {
      alert(err.response?.data?.message || "Email not found");
    }
  };

  return (
    <div className="card shadow p-4">
      <h3 className="text-center mb-3">Forgot Password</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-warning w-100">
          Send Reset Link
        </button>
      </form>

      {/* {resetLink && (
        <div className="mt-3">
          <p className="text-success">Click the link below:</p>
          <a href={resetLink}>{resetLink}</a>
        </div>
      )} */}
    </div>
  );
};

export default ForgotPassword;
