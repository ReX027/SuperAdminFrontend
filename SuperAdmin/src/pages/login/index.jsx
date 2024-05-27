import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const response = dispatch(
        userLogin({
          email: email,
          password: password,
        })
      );
      console.log("Logged in successfully:", response.data);
    } catch (error) {
      setErrorMessage("Invalid email or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
