import React, { useState } from 'react'
import { MovieCard } from './MovieCard.jsx'
import { useEffect } from 'react'
import { Spinner } from './Spinner.jsx';
import { get } from '../utils/httpClient';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Empty } from './Empty.jsx';



export function MoviesGrid({search}) {
  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true)

 
  
 
  useEffect(()=>{
    setIsLoading(true);
    const searchURL = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;
    get(searchURL).then((data) => {
      setMovies((prevMovies)=> prevMovies.concat(data.results));
      setHasMore (data.page < data.total_pages) 
      setIsLoading(false); 
    });
  }, [search,page]);
  
  if (!isLoading && movies.length === 0){
    return <Empty />
  }

  return (
    <div className='w-5/6 rounded xl:w-4/6'>
        <InfiniteScroll 
        dataLength={movies.length} 
        hasMore ={hasMore} 
        next ={()=> setPage((prevPage) => prevPage + 1) } 
        loader = {(<Spinner/>)}
        >

            <ul 
                className='grid grid-cols-1 gap-4 p-8 rounded backdrop-blur-sm xl:grid-cols-5 sm:grid-cols-4 justify-items-center'>
                {movies.map( (movie) =>(
                    <MovieCard key ={movie.id} movie={movie} />
        ))}
        </ul>  
      </InfiniteScroll>
    </div>
  
  );
}

