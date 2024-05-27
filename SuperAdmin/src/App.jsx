import { useState } from "react";
import "./style.scss";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
  const { isAuthenticated } = useSelector((state) => {
    return state.auth;
  });
  return (
    <>
      <div className="container">
        <>
          <div className="sidebar">
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/company"}>Company</NavLink>
            <NavLink to={"/payment"}>Payment</NavLink>
            <NavLink to={"/recruiter"}>Recruiter</NavLink>
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
