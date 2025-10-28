import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AlertMessage from "../components/AlertMessage";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">Reset Password</h3>
      {message && <AlertMessage type="success" message={message} />}
      {error && <AlertMessage type="danger" message={error} />}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
