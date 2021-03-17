import React from 'react' ;
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
        <Nav />
        <About />
        <Shop />
    </div>
  );
}

export default App;
