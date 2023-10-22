import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavor } from "../../store/slice/favorates";

export default function Favorites() {
  const favoraties = useSelector((state) => state.favorates.favorates);
  const dispatch = useDispatch();

  const handleDelete = (movie) => {
    const updatedFavorites = favoraties.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    dispatch(addFavor(updatedFavorites));
  };
  return (
    <>
      <div className="container d-flex flex-md-column  justify-content-around my-5 w-100">
        {favoraties.map((movie) => (
          <div
            key={movie.id}
            className="row  my-5 overflow-md-hidden"
            style={{ height: "30vh" }}
          >
            <div className="col-md-4 overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                className=" rounded-md-start "
                style={{ objectFit: "cover", width: "100%" }}
                alt="..."
              />
            </div>
            <div className="col-md-8 px-3 d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h5 className="card-title">
                  {movie.original_title}
                </h5>
                <p className="card-text"> {movie.overview}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {" "}
                    <button
                      className="btn btn-danger w-sm-100"
                      onClick={() => handleDelete(movie)}
                    >
                      {" "}
                      Delete
                    </button>
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
