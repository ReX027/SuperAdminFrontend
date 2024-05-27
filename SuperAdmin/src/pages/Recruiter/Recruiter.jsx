import React from "react";
import { useSelector } from "react-redux";
const Recruiter = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user.user);
  return (
    <>
      {!user.user.recruiter ? (
        <div>
          <h1 style={{ textAlign: "center" }}>⚠️</h1>
          <h1> Not authorised for this route</h1>
        </div>
      ) : (
        <h1>This is Recruiter page</h1>
      )}
    </>
  );
};

export default Recruiter;
