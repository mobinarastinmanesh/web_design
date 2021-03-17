import React from 'react';
import './App.css' ;

function Tweet(prop){ //{name , massage }
    return(
        <div className="tweet">
            <h2>{prop.name}</h2>
            <p>{prop.massage}</p>
            <h3>number of like</h3>
        </div>
    );
}

export default Tweet ;