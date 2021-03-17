import React,{useState,createContext} from 'react';
import './App.css';


export const MovieContext = createContext();

export const MovieProvider = Props => {
    const [movies , setMovies] = useState([
        {
            name : "Herry Potter" ,
            price : '$10' ,
            id : "Herry Potter"
        },
        {
            name : "Game Of Thrones" ,
            price : '$10' ,
            id : "Game Of Thrones" 
        },
        {
            name : "Inception" ,
            price : '$10' ,
            id : "Inception"
        }
    ]); 

  return (
    <div >
       <MovieContext.Provider value={[movies,setMovies]}>
            {Props.children}
       </MovieContext.Provider>
    </div>
  );
}

