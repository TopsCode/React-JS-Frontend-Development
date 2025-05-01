import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase_config";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const postsRef = collection(db, "posts");
        const q = query(
          postsRef,
          where("userId", "==", currentUser.uid),
          orderBy("createdAt", "desc")
        );

        const unsubscribePosts = onSnapshot(q, (snapshot) => {
          const postsData = snapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              createdAt: data.createdAt?.toDate(),
            };
          });
          setPosts(postsData);
        });

        // Cleanup Firestore listener
        return () => unsubscribePosts();
      }
    });

    // Cleanup Auth listener
    return () => unsubscribeAuth();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (confirm) {
      await deleteDoc(doc(db, "posts", id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-post/${id}`);
  };

  const getRelativeTime = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return days < 7 ? `${days} days ago` : `${Math.floor(days / 7)} weeks ago`;
  };

  return (
    <div style={styles.container}>
      <h2>My Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.header}>
              <strong>{post.username || "Me"}</strong>
              <span style={styles.time}>
                {post.createdAt ? getRelativeTime(post.createdAt) : ""}
              </span>
            </div>
            <h4>{post.title}</h4>
            {post.image && (
              <img src={post.image} alt={post.title} style={styles.image} />
            )}
            <p>{post.description}</p>
            <div style={styles.actions}>
              <button style={styles.editButton} onClick={() => handleEdit(post.id)}>
                Edit
              </button>
              <button style={styles.deleteButton} onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  image: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
    fontSize: "0.9rem",
    color: "#555",
  },
  time: {
    fontStyle: "italic",
    color: "#999",
  },
  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  editButton: {
    padding: "6px 12px",
    backgroundColor: "#f39c12",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default MyPosts;
