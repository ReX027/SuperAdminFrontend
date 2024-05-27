import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("");
  const [dashboard, setDashboard] = useState(false);
  const [payment, setpayment] = useState(false);
  const [company, setcompany] = useState(false);
  const [recruiter, setrecruiter] = useState(false);
  console.log(dashboard);
  return (
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
      <input
        type="text"
        placeholder="Status"
        onChange={(e) => {
          setStatus(e.target.value);
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
      <button>Create User</button>
    </div>
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
