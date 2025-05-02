// src/components/ChatScreen.js
import React from "react";
import { useParams } from "react-router-dom";

const ChatScreen = () => {
  const { friendId } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Chat with Friend ID: {friendId}</h2>
      {/* Chat logic goes here */}
    </div>
  );
};

export default ChatScreen;
