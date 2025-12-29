import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    await axios.post(
      `http://localhost:5000/api/auth/reset-password/${token}`,
      { password }
    );
    alert("Password reset successful");
  };

  return (
    <div className="container mt-5">
      <h3>Reset Password</h3>
      <input
        type="password"
        className="form-control my-2"
        placeholder="New Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="btn btn-success" onClick={submitHandler}>
        Reset Password
      </button>
    </div>
  );
}
