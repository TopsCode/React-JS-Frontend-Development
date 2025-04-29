// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase_config";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = auth.currentUser;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such user document in Firestore");
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = () => {
    auth.signOut();
    window.location.reload(); // Or redirect to login page
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>

      {userData ? (
        <div style={styles.profileContainer}>
          <img
            src={userData.profilePicture}
            alt="Profile"
            style={styles.profileImage}
          />
          <h2 style={styles.name}>Welcome, {userData.name}</h2>
          <p style={styles.email}>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <Link to="/add-post">
        <button style={styles.addPostButton}>Add New Post</button>
      </Link>
      <Link to="/view-all-post">
        <button style={styles.addPostButton}>View All Post</button>
      </Link>

      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  profileContainer: {
    marginBottom: "20px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
  },
  name: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  email: {
    color: "#555",
  },
  logoutButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  addPostButton: {
    marginTop: "20px",
    marginRight: "10px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;
