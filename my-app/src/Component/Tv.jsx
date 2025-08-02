import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TV() {
  const [shows, setShows] = useState([]);
  async function getShows() {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`);
    setShows(data.results);
  }
  useEffect(() => {
    getShows();
  }, []);
  return <>
      <h1 className="mt-5 text-center bg-danger text-white">TV Shows Page</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-3 mb-4 mt-4" key={show.id}>
            <div className="card mb-4">
              <Link to={`/detailstv/${show.id}`}>
                <div className="position-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
                    className="w-100 rounded rounded-2 pinkborder"
                    alt={show.title}
                  />
                  {/* Hover */}
                  <div className="imglayer rounded rounded-2">
                    <div className="imginfo">
                      <h5>{show.name}</h5>
                    </div>
                  </div>
                  {/* Vote */}
                  {show.vote_average ? (
                    <div className="p-2 position-absolute end-0 top-0 bg-danger text-white">
                      {show.vote_average?.toFixed(1)}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center bg-danger p-2 text-white">{show.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

}
