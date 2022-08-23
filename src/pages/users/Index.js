import React from 'react';
import { useEffect, useState } from "react";
import ListUsers from "../../components/users/List";


const IndexUser = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 mb-5 ">
      <div className="row  g-3">
        <h2 style={{ color: "#495252" }}>Users :</h2>
        {error && <div>{error}</div>}
        {loading && <div className="spinner-border text-secondary"></div>}
        {users && <ListUsers users={users} />}
      </div>
    </div>
  );
};

export default IndexUser;
