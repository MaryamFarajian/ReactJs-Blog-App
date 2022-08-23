
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleDelete = () => {
    setLoading(true);
    fetch(`http://localhost:8000/posts/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        setLoading(false);
        setError(null);
        Swal.fire({
          title: "Thanks!",
          text: `Post ${postId} delete successfully`,
          icon: "warning",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "warning",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <>
      <button onClick={handleDelete} className="btn btn-sm btn-danger me-4">
        {loading && (
          <div className="spinner-border  spinner-border-sm me-2"></div>
        )}
        Delete
      </button>
      {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
    </>
  );
};
export default DeletePost;
