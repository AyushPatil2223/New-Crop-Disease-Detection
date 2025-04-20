// frontend/src/components/Post.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/posts"; // Update if needed

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data.reverse()); // show latest posts first
    } catch (err) {
      console.error("Error fetching posts:", err.message);
    }
  };

  const handlePost = async () => {
    if (!newPostText.trim()) return;
    const user = username.trim() === "" ? "Anonymous" : username.trim();
    try {
      const res = await axios.post(API_URL, {
        username: user,
        text: newPostText.trim(),
      });
      setPosts([res.data, ...posts]);
      setNewPostText("");
    } catch (err) {
      console.error("Error posting:", err.message);
    }
  };

  const handleLike = async (id) => {
    try {
      const res = await axios.put(`${API_URL}/${id}/like`);
      setPosts(
        posts.map((post) =>
          post._id === id ? { ...post, likes: res.data.likes } : post
        )
      );
    } catch (err) {
      console.error("Error liking post:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      console.error("Error deleting post:", err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Public Posts</h2>

      {/* Create Post */}
      <div className="bg-white shadow p-4 rounded-md mb-6">
        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Your name (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          className="w-full border p-2 mb-2 rounded"
          placeholder="What's on your mind?"
          rows={3}
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button
          onClick={handlePost}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Post
        </button>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="bg-white shadow p-4 rounded-md mb-4">
            <div className="font-semibold text-green-700">{post.username}</div>
            <p className="my-2">{post.text}</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <button onClick={() => handleLike(post._id)}>❤️ {post.likes}</button>
              <button onClick={() => handleDelete(post._id)}>🗑️ Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
