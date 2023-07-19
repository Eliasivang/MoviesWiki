import { Link } from "react-router-dom";



 export function MovieCard( { movie } ) {

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    const movieTitle= movie.title;
    return(
        <li>
            <Link to = {"/movies/" + movie.id}>
                <img 
                className="p-0 rounded shadow-2xl hover:shadow-black" 
                src={imagenUrl} 
                alt={movie.title} />
                <h2 
                className="text-sm text-center text-white">
                    {movieTitle}
                </h2>
            </Link>
    </li>
    
)}
    

