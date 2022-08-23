import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListPosts from "../../components/posts/List";

const IndexPost = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="row  g-3">
          <h2 style={{ color: "#495252" }}>Posts :</h2>
          <div>
            <Link to="/posts/create" className="btn btn-secondary">
              Create Post
            </Link>
          </div>
          {error && <div>{error}</div>}
          {loading && <div className="spinner-border text-secondary"></div>}
          {posts && <ListPosts posts={posts} />}
        </div>
      </div>
    </>
  );
};

export default IndexPost;
