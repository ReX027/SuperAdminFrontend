import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
import { useSelector } from "react-redux";
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [dashboard, setDashboard] = useState(false);
  const [payment, setpayment] = useState(false);
  const [company, setcompany] = useState(false);
  const [recruiter, setrecruiter] = useState(false);
  const [message, setMessage] = useState("");
  let { user } = useSelector((state) => state.auth);
  async function createUserHandler() {
    let formData = new FormData();
    formData.append("userName", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("mobile", number);
    formData.append("Dashboard", dashboard);
    formData.append("payment", payment);
    formData.append("company", company);
    formData.append("recruiter", recruiter);
    axios
      .post(`http://localhost:3000/create-user`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        let { message } = res.data;
        setMessage(message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {!user?.Dashboard ? (
        <div>
          <h1 style={{ textAlign: "center" }}>⚠️</h1>
          <h1> Not authorised for this route</h1>
        </div>
      ) : (
        <div className="createUserContainer">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="mobile num"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />

          <div className="permission">
            <div>
              <label htmlFor="dashboard">Dashboard</label>
              <input
                type="checkbox"
                name="dashboard"
                id="dashboard"
                onChange={(e) => {
                  setDashboard(e.target.checked);
                }}
              />
            </div>
            <div>
              <label htmlFor="payment">payment</label>
              <input
                type="checkbox"
                name="payment"
                id="payment"
                onChange={(e) => {
                  setpayment(e.target.checked);
                }}
              />
            </div>
            <div>
              <label htmlFor="company">company</label>
              <input
                type="checkbox"
                name="company"
                id="company"
                onChange={(e) => {
                  setcompany(e.target.checked);
                }}
              />
            </div>
            <div>
              <label htmlFor="recruiter">recruiter</label>
              <input
                type="checkbox"
                name="recruiter"
                id="recruiter"
                onChange={(e) => {
                  setrecruiter(e.target.checked);
                }}
              />
            </div>
          </div>
          <button onClick={createUserHandler}>Create User</button>
          <br />
          <br />
          {message ? <h3>{message}</h3> : ""}
        </div>
      )}
    </>
  );
};

/**'
 * {
   "userName":"tushar",
   "email":"tushar@rework.club",
   "password":"12341234",
   "mobile":8709663933,
   "status":"string",
  "Dashboard": false,
  "company": true,
  "manageRoles": false,
  "forms": false,
  "recruiter": false,
  "referral": false,
  "cms":false,
  "payment": false,
  "clientNotificationReg_Id": "String",
  "Applications": false,
  "Invoices": false,
  "Notifications": false,
  "NeedHelp": true,
  "CustomId": "string",
  "createUser":false
}
 */
export default CreateUser;
