import React from 'react';
import './App.css' ;

function Movie(props){
    return(
        <div className="movie">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.id}</p>
        </div>
    )
}
export default Movie;