import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authActions";
import { useNavigate } from "react-router-dom";
import { combineSlices } from "@reduxjs/toolkit";

function Login() {
  const [email, setEmail] = useState("ranveer@rework.club");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  console.log("in login");
  useEffect(() => {
    if (isAuthenticated && user?.Dashboard) {
      navigate("/");
    }
  }, [isAuthenticated, user?.Dashboard, navigate]);
  const handleLogin = async () => {
    try {
      const response = dispatch(
        userLogin({
          email: email,
          password: password,
        })
      );
      if (isAuthenticated && user.dashboard) {
        navigate("/");
      }
      console.log("Logged in successfully:", response.data);
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading.........</div>
      ) : (
        <div>
          <h2>Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      )}
    </>
  );
}

export default Login;
