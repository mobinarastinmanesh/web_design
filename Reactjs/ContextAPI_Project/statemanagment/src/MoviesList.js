import React,{useContext,useState} from 'react' ;
import './App.css';
import Movie from './Movie' ;
import Nav from './Nav' ;
import { MovieContext } from './MoviesContext';


function MoviesList(){
    const [movies , setMovies] = useContext(MovieContext);
    return(
        <div>           
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price} id={movie.id} />          
            ))}
        </div>
    )
}

export default MoviesList ;
            
