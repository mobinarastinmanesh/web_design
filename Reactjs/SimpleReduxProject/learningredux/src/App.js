import './App.css';
import {increament} from './action';
import {decreament} from './action';
import {useSelector , useDispatch} from 'react-redux' ;

function App() {
  const counter = useSelector(state => state.counter) ;
  const isLogged = useSelector(state => state.isLogged) ;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter {counter} </h1>
      <button onClick={()=> dispatch(increament())}>+</button>
      <button onClick={()=> dispatch(decreament())}>-</button> */}
      { isLogged ? <h3>valuable Information i shouldn't see</h3> : ' ' }
    </div>
  );
}

export default App;
