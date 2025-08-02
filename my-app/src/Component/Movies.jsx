import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=44ee5523e457e74020effc2bddc4592e`
    );
    
    setMovies(data.results);
  }
  useEffect(() => {
    getMovies();
  }, []);
  return <>
      <h1 className="mt-5 text-center bg-info text-white">Movies Page</h1>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4 mt-4" key={movie.id}>
            <div className="card mb-4">
              <Link to={`/detailsmovies/${movie.id}`}>
                <div className="position-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="w-100 rounded rounded-2 pinkborder"
                    alt={movie.title}
                  />
                  {/* Hover */}
                  <div className="imglayer rounded rounded-2">
                    <div className="imginfo">
                      <h5>{movie.title}</h5>
                    </div>
                  </div>
                  {/* Vote */}
                  {movie.vote_average ? (
                    <div className="p-2 position-absolute end-0 top-0 bg-info text-white">
                      {movie.vote_average?.toFixed(1)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center bg-info p-2 text-white">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

}
