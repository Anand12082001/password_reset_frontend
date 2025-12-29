import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submitHandler = async () => {
    await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
    alert("Reset link sent!");
  };

  return (
    <div className="container mt-5">
      <h3>Forgot Password</h3>
      <input
        className="form-control my-2"
        placeholder="Enter email"
        onChange={e => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" onClick={submitHandler}>
        Send Reset Link
      </button>
    </div>
  );
}
