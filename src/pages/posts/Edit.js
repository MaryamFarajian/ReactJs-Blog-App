import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFormPost from "../../components/posts/EditForm";
import image from "../../img/image1.png";

const EditPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${postId}`)
      .then((response) => response.json())
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
      {loading && <div className="spinner-border"></div>}
      {post && <EditFormPost post={post} />}
      <div className="col-md-6 rounded-1">
        <img className="col-md-12" src={image} alt="test" />
      </div>
    
    </>
  );
};
export default EditPost;
