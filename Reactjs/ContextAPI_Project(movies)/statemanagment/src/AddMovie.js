import React, { useState , useContext} from 'react' ;
import {MovieContext} from './MoviesContext' ;
var idd= 1 ;
const AddMovie = () =>{
    const [name , setName] = useState('') ;
    const [price , setPrice] = useState('') ;
    const [movies , setMovies] = useContext(MovieContext);

    const updateName = (e) =>{
        setName(e.target.value);
    }
    const updatePrice = (e) =>{
        setPrice(e.target.value);
    }
    const addMovie = (e)=>{
        e.preventDefoult();
        setMovies(preMovies => [...preMovies , 
            {
                name : name ,
                price : price 
                
             }
            ])
    }
    return(
        <form onSubmit={addMovie} className="addmovies">
            <input
             type="text"
             name="name"
             value={name}
             onChange={updateName}
             placeholder="Name"
             />
            <input 
             type="text"
             name="price" 
             value={price} 
             onChange={updatePrice}
             placeholder="Price"
/>
            <button>ADD</button>
        </form>
    );
}

export default AddMovie ;