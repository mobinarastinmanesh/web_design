import React, { useEffect,useState } from 'react' ;
import './App.css';
import Recipe from './recepies';

function App() {
  const APP_ID = "64745557";
  const APP_KEY = "79420a463d13f36569b0ac60213d8191";
  const [recepies , setRecepies] = useState([]);
  const [search , setSearch] = useState("");
  const [query , setQuery] = useState('chicken')
  useEffect(()=>{
    getRecipes();
    console.log(query);
  },[query]);
  
  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecepies(data.hits);
    console.log(data.hits)
  }
  const updateSearch = e =>{
      setSearch(e.target.value);
      console.log(e.target.value)
  }
  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      console.log("teeest")
  }
  return (
      <div className="search-form">
        <form className="app" onSubmit={getSearch}>
          <input type="text" onChange={updateSearch}/>
          <button type="submit" className="search-button"  >Search</button>     
        </form>
      
        <div className="recipies">
          {recepies.map(recipe =>(
           
            <Recipe 
              key = {recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image} 
      
            />  
            
          ))}
       </div>
     </div>    
     
  );
}

export default App;
