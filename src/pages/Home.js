import React from "react";
import image from "../img/image.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-md-6 d-grid  align-items-center rounded-1 p-5">
            <p style={{ color:"#495252" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsum architecto inventore delectus, perspiciatis debitis
              deserunt! Laborum alias rem fugit nihil na m culpa error, esse
              molestiae quasi nulla deleniti excepturi?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              officia. Doloribus beatae facilis aperiam distinctio repudiandae
              totam eius tenetur numquam officia, debitis eum dolorous repellat
              hic laboriosam natus quis? Sint!
            </p>
            <div className="col-md-12 d-flex  justify-content-end">
              <Link className="btn btn-secondary" to="/users">
                users
              </Link>
              <Link className="btn btn-light shadow-sm ms-5" to="/posts">
                posts
              </Link>
            </div>
          </div>
          <div className="col-md-6 rounded-1 p-5">
            <img className="col-md-12" src={image} alt="test" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
