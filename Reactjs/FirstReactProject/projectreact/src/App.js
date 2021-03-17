import React,{useState} from 'react';
import Tweet from './tweet' ;
import './App.css' ;
//a component

function App(){
/**1**/
  /*function App(){
    return(
        <div className="app">
          <Tweet name="mobina" massage="Hello" />
          <Tweet name="ali" massage="today is good!"/>
          <Tweet name="sara" massage="i love piza"/>
          <Tweet name="mina" massage="snow is nice"/>
        </div>
    ) ; 
  
}*/ 
/**2**/
  /*const [isRed , setRed] = useState(false);
  const [count , setCount] = useState(0);
  const increment = () =>{
    setCount(count + 1 );
    setRed(!isRed);
  }
  return(
    <div className="app">
      <h1 className={isRed ? 'red' : ""}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  )*/
/**3**/
  const [users , setUsers] = useState([
    {name : 'mobina' ,massage : 'i am mobina'},
    {name : 'sara'   ,massage : 'i am sara'},
    {name : 'ali'   ,massage : 'i am ali'},
    {name : 'taha'   ,massage : 'i am taha'}
  ]);
  return(
    <div className='app'>
      {users.map(user =>(
        <Tweet name={user.name} massage={user.massage} />
      ))}
    </div>
  )

}


//not html this is JSX
//Compile to html
// React.createElement(div)
export default App ;
