import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosConfig/instance";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState("4");
  // const navigate = useNavigate();

  const getDataFromAPI = () => {
    instance
      .get(`/movie/popular?page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataFromAPI();
  }, [page]);

  const handelPageChange = (option) => {
    switch (option) {
      case "next":
        setPage(++page);
        break;
      case "prev":
        setPage(--page);
        break;
      default:
        setPage(page);
    }
  };
  const handleSearchInput = (value) => {};

  return (
    <>
      <div className="container ">
        <div className="card-deck d-flex justify-content-center align-items-center flex-wrap">
          {movies.map((movie) => (
            <div
              className="card mb-3 mx-2 "
              key={movie.id}
              style={{ width: "30%" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 class="card-title">{movie.title} </h5>
                <h6 class="card-subtitle mb-2 text-muted"></h6>
                <p>
                  <button type="button" class="btn btn-success">
                    <Link
                      to={`/productDetails/${movie.id}`}
                      class="card-link text-decoration-none text-white"
                    >
                      View Details
                    </Link>
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container d-flex w-100 justify-content-around  align-items-center m-5">
        <div>
          {" "}
          <button
            className="btn btn-primary "
            onClick={() => handelPageChange("next")}
            style={{ width: "200px" }}
          >
            {" "}
            Next{" "}
          </button>
        </div>
        <div>
          {" "}
          <button
            className="btn btn-danger "
            onClick={() => handelPageChange("prev")}
            style={{ width: "200px" }}
          >
            {" "}
            previous{" "}
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
