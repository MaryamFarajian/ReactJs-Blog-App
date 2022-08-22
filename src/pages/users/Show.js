import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../img/image2.png";

const ShowUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="container mt-5">
      <div className="row g-3">
        {error && <div>{error}</div>}
        {loading && <div className="spinner-border"></div>}
        {user && (
          <div className="col-md-6 d-flex align-items-center">
            <div className="card col-md-12">
              <div className="card-header">{user.name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">username : {user.username}</li>
                <li className="list-group-item">email : {user.email}</li>
                <li className="list-group-item">phone : {user.phone}</li>
                <li className="list-group-item">website : {user.website}</li>
              </ul>
            </div>
          </div>
        )}
        <div className="col-md-6 rounded-1 ps-5">
          <img className="col-md-12" src={image} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
