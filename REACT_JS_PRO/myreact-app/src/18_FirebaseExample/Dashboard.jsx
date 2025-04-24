// src/components/Dashboard.js
import React from "react";
import { auth } from "../firebase_config";

const Dashboard = () => {
  const user = auth.currentUser;

  const handleLogout = () => {
    auth.signOut();
    window.location.reload(); // or redirect to login
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
