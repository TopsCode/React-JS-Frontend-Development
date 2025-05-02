// src/components/AllFriends.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_config";
import { useNavigate } from "react-router-dom";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "Friends"));
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFriends(usersList);
    };

    fetchUsers();
  }, []);

  const goToChat = (friendId) => {
    navigate(`/chat/${friendId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Friends</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {friends.map(friend => (
          <div 
            key={friend.id} 
            onClick={() => goToChat(friend.id)} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "10px", 
              borderRadius: "8px", 
              cursor: "pointer",
              width: "200px"
            }}
          >
            <img 
              src={friend.profilePicture} 
              alt={friend.name} 
              style={{ width: "100px", height: "100px", borderRadius: "50%" }} 
            />
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
