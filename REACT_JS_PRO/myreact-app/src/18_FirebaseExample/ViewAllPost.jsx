import React, { useEffect, useState } from "react";
import { db } from "../firebase_config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const ViewPostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
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

    return () => unsubscribe();
  }, []);

  const getRelativeTime = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(days / 365);
    return `${years} years ago`;
  };

  return (
    <div style={styles.container}>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <div style={styles.header}>
              <strong>{post.username || "Unknown"}</strong>
              <span style={styles.time}>
                {post.createdAt ? getRelativeTime(post.createdAt) : ""}
              </span>
            </div>
            <h4>{post.title}</h4>
            <img src={post.image} alt={post.title} style={styles.image} />
            <p>{post.description}</p>
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
};

export default ViewPostList;