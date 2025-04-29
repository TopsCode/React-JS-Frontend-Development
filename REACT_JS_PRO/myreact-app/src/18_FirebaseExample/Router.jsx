// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import { auth } from "../firebase_config";
import ProtectedRoute from "./ProtectedRoute";
import AddPost from "./AddPost";
import ViewPostList from "./ViewAllPost";


function Router() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         <Route
          path="/add-post"
          element={
            <ProtectedRoute user={user}>
              <AddPost />
            </ProtectedRoute>
          }
        />
         <Route
          path="/view-all-post"
          element={
            <ProtectedRoute user={user}>
              <ViewPostList/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
