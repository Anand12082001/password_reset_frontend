import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        `/auth/reset-password/${token}`,
        { password }
      );

      setMessage(res.data.message);
      setError("");

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired token");
      setMessage("");
    }
  };

  return (
    <div style={{ width: "400px", margin: "100px auto" }}>
      <h2>Reset Password</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none"
          }}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
