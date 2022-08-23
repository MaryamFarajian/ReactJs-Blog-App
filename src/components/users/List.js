import React from "react";
import { Link } from "react-router-dom";

const ListUsers = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="col-md-4" key={user.id}>
          <div className="card" style={{ height: "200px" }}>
            <div className="card-header fw-bold">
              <Link style={{ color: "#6c757d" }} to={`/users/${user.id}`}>
                {user.name}
              </Link>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">username : {user.username}</li>
              <li className="list-group-item">email : {user.email}</li>
              <li className="list-group-item">phone : {user.phone}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListUsers;
