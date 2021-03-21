import React from 'react' ;
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about"  component={About} />
              <Route path="/shop" exact component={Shop} />
          </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default App;
