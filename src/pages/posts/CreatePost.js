import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import image from "../../img/image3.png";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        Swal.fire("Good job!", "You clicked the button!", "success");
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };
  return (
    <>
      <div className="col-md-6  d-grid align-items-center">
        <div className="col-md-12">
          <h2 style={{ color: "#495252" }}>Create post:</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3 ">
              <label className="form-label">Title</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
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
                className="form-control"
                rows="3"
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
              Create
            </button>
            {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
          </form>
        </div>
      </div>
      <div className="col-md-6 rounded-1 p-5">
        <img src={image} className="col-md-12" alt="test" />
      </div>
    </>
  );
};
export default CreatePost;
