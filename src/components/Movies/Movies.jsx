import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axiosConfig/instance";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { addFavor } from "../../store/slice/favorates";

export default function Movies() {
  const favoraties = useSelector((state) => state.favorates.favorates);
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const dispatch = useDispatch();

  console.log("is logged from the state ", isLogged);

  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState("4");

  const getDataFromAPI = () => {
    console.log("this is favoraties");
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
  }, []);

  const movieInFav = (movie) => {
    return favoraties.some((favMovie) => favMovie.id === movie.id);
  };
  const handleAddToFavorites = (event, movie) => {
    event.preventDefault();
    if (movieInFav(movie)) {
      // If the movie is already in favorites, remove it
      const updatedFavorites = favoraties.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      dispatch(addFavor(updatedFavorites));
      console.log(updatedFavorites);
    } else {
      // If the movie is not in favorites, add it
      const updatedFavorites = [...favoraties, movie];
      dispatch(addFavor(updatedFavorites));
      console.log(updatedFavorites);
    }
  };

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
              {movieInFav(movie) ? (
                <MdOutlineFavorite
                  onClick={(event) => handleAddToFavorites(event, movie)}
                />
              ) : (
                <MdOutlineFavoriteBorder
                  onClick={(event) => handleAddToFavorites(event, movie)}
                />
              )}{" "}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title} </h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p>
                  <button type="button" className="btn btn-success">
                    <Link
                      to={`/productdetails/${movie.id}`}
                      className="card-link text-decoration-none text-white"
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
