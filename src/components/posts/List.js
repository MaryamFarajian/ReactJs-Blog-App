import { Link } from "react-router-dom";

const ListPosts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className="col-md-4" key={post.id}>
          <div className="card" style={{ height: "200px" }}>
            <div className="card-header fw-bold">
              <Link style={{ color: "#6c757d" }} to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </div>
            <div className="card-body">{post.body}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListPosts;
