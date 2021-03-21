import React from 'react' ;
import './App.css';
import {Link} from "react-router-dom";
function Nav() {
  const style ={
    color : "while" ,   
  }
  return (
   
    <div className="App">
         <nav>
             <h1>LOGO</h1>
             <ul >
              <Link  to="/">
                <li >HOME</li>
              </Link> 
              <Link to="/about">
                <li>ABOUT</li>
              </Link> 
              <Link to="/shop">
                <li>SHOP</li>
              </Link> 
             </ul>
         </nav>
    </div>
  );
}

export default Nav;
