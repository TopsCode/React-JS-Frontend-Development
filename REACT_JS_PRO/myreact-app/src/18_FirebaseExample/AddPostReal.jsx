import React, { useState } from "react";
import { db, auth, storage } from "../firebase_config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddPostReal = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageFile: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, imageFile } = form;

    if (!imageFile) {
      setMessage("Please select an image file.");
      return;
    }

    try {
      const timestamp = Date.now();
      const imageName = `${auth.currentUser.uid}_${timestamp}`;
      const imageRef = ref(storage, `posts/${imageName}`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);

      await addDoc(collection(db, "posts"), {
        userId: auth.currentUser.uid,
        title,
        description,
        image: imageUrl,
        createdAt: serverTimestamp(),
      });

      setMessage("Post added successfully!");
      setForm({ title: "", description: "", imageFile: null });
    } catch (error) {
      console.error(error);
      setMessage("Failed to add post.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Post</h2>
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
          name="imageFile"
          type="file"
          accept="image/*"
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
        <button type="submit" style={styles.button}>Add Post</button>
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
