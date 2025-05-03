import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot
} from "firebase/firestore";
import { db } from "../firebase_config";

const ChatScreen = () => {
  const { friendId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [friend, setFriend] = useState(null);
  const [chatId, setChatId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const current = { id: user.uid, ...userDoc.data() };
      setCurrentUser(current);

      const friendDoc = await getDoc(doc(db, "users", friendId));
      if (friendDoc.exists()) {
        const friendData = { id: friendDoc.id, ...friendDoc.data() };
        setFriend(friendData);

        // Generate unique chat ID based on sorted user IDs
        const generatedChatId = [current.id, friendData.id].sort().join("_");
        setChatId(generatedChatId);
      }
    };

    fetchUserData();
  }, [friendId]);

  useEffect(() => {
    if (!chatId) return;

    const messagesRef = collection(db, "chats", chatId, "messages");
    const q = query(messagesRef, orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async () => {
    if (input.trim() === "" || !currentUser || !chatId) return;

    const messagesRef = collection(db, "chats", chatId, "messages");
    await addDoc(messagesRef, {
      text: input,
      senderId: currentUser.id,
      senderName: currentUser.name,
      timestamp: new Date()
    });

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{friend ? `Chat with ${friend.name}` : "Loading chat..."}</h2>

      <div style={{
        border: "1px solid #ccc",
        padding: "10px",
        height: "300px",
        overflowY: "auto",
        marginBottom: "10px",
        borderRadius: "8px",
        background: "#f9f9f9"
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.senderId === currentUser?.id ? "right" : "left",
            margin: "5px 0"
          }}>
            <div style={{ fontSize: "12px", color: "#666", marginBottom: "2px" }}>
              {msg.senderName}
            </div>
            <span style={{
              display: "inline-block",
              padding: "8px 12px",
              background: msg.senderId === currentUser?.id ? "#dcf8c6" : "#eee",
              borderRadius: "15px"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc"
          }}
        />
        <button onClick={sendMessage} style={{
          padding: "10px 20px",
          borderRadius: "20px",
          background: "#007bff",
          color: "white",
          border: "none"
        }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
