import React , {Component,useState} from 'react';
import Nav from './component/navigation';
import Counters from './component/counters' ;
import './App.css';


const App = () => {
 const  [counters , setCounter] = useState([
    { id:1 , value : 0},
    { id:2 , value : 0},
    { id:3 , value : 0},
    { id:4 , value : 0},
    { id:5 , value : 0}
  ])
  let total =0 ;
  counters.forEach(element => {
    total += (element.value);
  console.log(total)

  });
    return (  
        <div className="container">
          <Nav total={total}/>
          <Counters 
            counters={counters}
            setCounter={setCounter}
          />
        </div>

    );
  
}
 
export default App;