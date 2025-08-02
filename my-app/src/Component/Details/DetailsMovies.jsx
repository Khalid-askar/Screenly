import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailsMovie() {

    const [details,setDetails]=useState({});

let {id}=useParams();

  async  function getItemDetails(id) {
        let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=44ee5523e457e74020effc2bddc4592e`)
    console.log(data);
    setDetails(data)
    
    }

    useEffect(()=>{
        getItemDetails(id)
    },[])


  return<>
  <div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-4">
        <img src={'https://image.tmdb.org/t/p/w500/'+details.poster_path} className='w-100 rounded rounded-5 pinkborder mt-5' alt="" />

        </div>
        <div className="col-md-8 mt-5">
            <h3 className="">Title : <span className="pink-text">{details.title}</span></h3>
    <p className="py-2 h5">Tagline : <span className="pink-text">{details.tagline}</span></p>
    <ul className=" list-unstyled d-flex">{details.genres?.map((x)=><div className="p-3 mx-2 rounded rounded-2 bg-pink" key={details.id}>{x.name}</div>)}</ul>
    <p className="py-2 h5">Vote Average : <span className="pink-text">{details.vote_average?.toFixed(1)}</span></p>
    <p className="py-2 h5">Vote Count : <span className="pink-text">{details.vote_count?.toFixed(1)}</span></p>
    <p className="py-2 h5">Date : <span className="pink-text">{details.release_date}</span></p>
    <p className="py-2 h5">Overview : <span className="pink-text">{details.overview}</span></p>

        </div>
    </div>
  </div>
  
  </>
}
