import React from 'react'
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
//import MoviesGrid from './components/MoviesGrid'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <Router>
      <div 
      className= "h-screen ">
          <div 
          className=''>
              <header 
              className='items-center justify-center w-full grid-cols-1 px-10 py-10 bg-grey sm:flex sm:justify-between md:px-36'>
              <div>
                  <Link to = "/">
                      <h1 
                      className='text-5xl font-light text-center text-white 2xl'>
                          Movies
                      </h1>
                      <h2 
                      className='text-xl font-medium text-center text-violet-700'>
                          WIKI
                      </h2>
                  </Link>
              </div>
          
              <div 
              className='pt-6 text-center '>
                <Search/>
              </div>
              
              </header>
          </div>
        <main 
        className='pt-5 mx-0 '>        
          <Routes>
              <Route 
              exact path="/movies/:movieId" 
              element={ <MovieDetails/> }/>
              <Route 
              path="/" 
              element={<LandingPage/>} />
          </Routes>
        </main>
      </div>
      
      
    </Router>
  )
}

export default App