import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import instance from "../../axiosConfig/instance";
export default function ProductDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  // getting from the api
  async function getMovie() {
    try {
      // https://api.themoviedb.org/3/movie/
      const res = await instance.get(`/movie/${id}`);
      console.log("this is the data ", res.data);
      setMovie(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <div className="container h-100 w-100 ">
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="image-container col-6 ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              className="object-fit-contain"
              style={{ objectFit: "cover", width: "100%" }}
              alt="..."
            />
          </div>
          {/* movie Details  */}
          <div className="col-6">
            <h1 className="fs-2  ">{movie.title}</h1>
            <p className="fs-5 ">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
