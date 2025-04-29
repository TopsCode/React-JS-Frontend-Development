// src/components/AddPost.js
import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase_config";
import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [message, setMessage] = useState("");
  const [name, setName] = useState("Loading...");

  // Fetch username after Firebase Auth is ready
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setName(userSnap.data().name);  // Fetch the 'name' from Firestore
          } else {
            setName(user.email || "Unknown");
          }
        } catch (err) {
          console.error("Error fetching name:", err);
          setName(user.email || "Unknown");
        }
      } else {
        setName("Unknown");
      }
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, imageUrl } = form;

    if (!auth.currentUser) {
      setMessage("You must be logged in to post.");
      return;
    }

    if (!imageUrl) {
      setMessage("Please provide an image URL.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        userId: auth.currentUser.uid,
        username: name,  // Use 'name' instead of 'username'
        title,
        description,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      setMessage("Post added successfully!");
      setForm({ title: "", description: "", imageUrl: "" });
    } catch (error) {
      console.error("Error adding post:", error);
      setMessage("Failed to add post.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Post (via Image URL)</h2>
      <h3>Posting as: <strong>{name}</strong></h3>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          Add Post
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    maxWidth: "500px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1rem",
  },
  textarea: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1rem",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddPost;
