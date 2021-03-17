import React,{useContext} from 'react';

import './App.css';
import Movie from './Movie';
import { MovieContext } from './MoviesContext';

function Nav() {
 const [Movies , setMovies] = useContext(MovieContext);
  return (
    <div className="nav">
      <h3>Mobina</h3>
      <p> List Of Movies : {Movies.length}</p>
    </div>
  );
}

export default Nav;
