import { useState } from "react";
import "./style.scss";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
          <NavLink to={"/company"}>Company</NavLink>
          <NavLink to={"/payment"}>Payment</NavLink>
          <NavLink to={"/recruiter"}>Recruiter</NavLink>
        </div>
        <div className="rightContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
