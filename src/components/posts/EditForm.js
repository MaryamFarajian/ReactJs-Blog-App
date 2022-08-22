import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({ post }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`http://localhost:8000/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
        id: post.id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        Swal.fire("Thanks!", "post update successfully!", "success" );
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "warning",
          confirmButtonText: "ok",
        });
      });
  };
  useEffect(() => {
    setTitle(post.title);
    setBody(post.body);
  }, [post]);

  return (
    <div className="col-md-6 d-grid align-items-center">
      <form className="mb-3 col-md-12" onSubmit={(e) => handleSubmit(e)}>
        <h2 style={{ color: "#495252" }} className="pb-5">
          Edit Post:{" "}
        </h2>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control"
            placeholder="name@example.com"
          />
          <div className="form-text text-danger">
            {title ? "" : "Title is Required"}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className="form-control"
            rows="6"
          ></textarea>
          <div className="form-text text-danger">
            {body ? "" : "Body is Required"}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-secondary"
          disabled={title === "" || body === ""}
        >
          {loading && (
            <div className="spinner-border spinner-border-sm me-2"></div>
          )}
          Edit
        </button>
        {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
      </form>
    </div>
  );
};
export default EditForm;
