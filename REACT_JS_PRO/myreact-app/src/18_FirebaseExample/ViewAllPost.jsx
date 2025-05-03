import React, { useEffect, useState } from "react";
import { db } from "../firebase_config";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const ViewPostList = () => {
  const [posts, setPosts] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate(),
          likedBy: data.likedBy || [],
        };
      });
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  const handleLike = async (postId, likedBy = []) => {
    const user = auth.currentUser;
    if (!user) {
      alert("You need to log in to like a post.");
      return;
    }

    const postRef = doc(db, "posts", postId);
    const alreadyLiked = likedBy.includes(user.uid);

    try {
      await updateDoc(postRef, {
        likes: increment(alreadyLiked ? -1 : 1),
        likedBy: alreadyLiked ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });
    } catch (err) {
      console.error("Error updating like:", err);
    }
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
    return `${days} days ago`;
  };

  return (
    <div style={styles.container}>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => {
          const isLiked = user && post.likedBy.includes(user.uid);
          return (
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

              <button
                onClick={() => handleLike(post.id, post.likedBy)}
                style={{
                  ...styles.likeButton,
                  backgroundColor: isLiked ? "#d3d3d3" : "#dc3545",
                }}
              >
                {post.likes || 0} Likes  
              </button>
            </div>
          );
        })
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
  likeButton: {
    marginTop: "10px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default ViewPostList;
