import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "../../components/posts/Delete";
import image from "../../img/image4.png";

const ShowPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [postId]);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div className="spinner-border text-secondary"></div>}
      {post && (
        <div className="row">
          
        <div className="col-md-6 d-grid align-items-center" style={{height:'600px'}}>
            <div className="card ">
              <div className="card-header">{post.title}</div>
              <ul className="card-body">{post.body}</ul>
              <div className="card-footer ">
                <DeletePost postId={post.id} />
                <Link
                  to={`/posts/edit/${postId}`}
                  className="btn btn-sm btn-secondary"
                >
                  Edit
                </Link>
              </div>
            </div>
        </div>
        <div className="col-md-6 rounded-1 p-5">
            <img className="col-md-12" src={image} alt="test" />
        </div>
          </div>
      )}
    </>
  );
};

export default ShowPost;
