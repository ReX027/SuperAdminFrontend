import React from "react";
import { useSelector } from "react-redux";
const Payment = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {!user.user.payment ? (
        <div>
          <h1 style={{ textAlign: "center" }}>⚠️</h1>
          <h1> Not authorised for this route</h1>
        </div>
      ) : (
        <h1>This is Payment page</h1>
      )}
    </>
  );
};

export default Payment;
