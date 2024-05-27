import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./features/auth/authActions";
import Error from "./pages/Error";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(userLogout()).then(() => {
      console.log("loggedOut");
      navigate("/login");
    });
  };
  return (
    <>
      <div className="container">
        <>
          <div className="sidebar">
            <NavLink to={"/"}>Dashboard</NavLink>
            <NavLink to={"/company"}>Company</NavLink>
            <NavLink to={"/payment"}>Payment</NavLink>
            <NavLink to={"/recruiter"}>Recruiter</NavLink>
          </div>
          <div
            style={{
              position: "absolute",
              left: "10px",
              // margin,
            }}
          >
            <button
              style={{
                borderRadius: "20px",
                fontSize: "20px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <div className="rightContainer">
            <Outlet />
          </div>
        </>
      </div>
    </>
  );
}

export default App;
