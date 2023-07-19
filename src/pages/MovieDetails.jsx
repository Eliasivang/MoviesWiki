import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Spinner } from "../components/Spinner";
import { get } from "../utils/httpClient";



//import { get } from "../utils/httpClient";
export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  
  useEffect(()=>{
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);
    

  if(isLoading){
    return <div className="flex items-center justify-center w-full h-full">
      <Spinner/>
       
    </div>

  }

  if (!movie) {
    return null;
  }

  const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const releaseDate = movie.release_date.slice(0,4);
  return (
    <div 
    className="h-screen">
    <div 
    className="flex justify-center pt-10">
        <div 
        className="flex flex-wrap justify-center w-full py-5 mx-5 rounded sm:m-0 sm:w-2/3 sm:py-5 backdrop-brightness-full sm:backdrop-blur-md sm:backdrop-brightness-50">
          <div >
            <img 
            className="w-full m-0 rounded" src= {imagenUrl} alt= {movie.title}></img>
          </div>
        <div 
        className="w-full m-3 lg:w-4/6 lg:p-0">
            <p><strong>Title: </strong>{movie.title}</p><br></br>
            <p><strong>Description: </strong> {movie.overview} </p><br></br>
            <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(", ")}</p><br></br>
            <p><strong>Release Date: </strong> {releaseDate} </p><br></br>
            <p><strong>Vote Average: </strong> {movie.vote_average} </p><br></br>
        </div>

        </div>
    </div>
    </div>
  )
}

