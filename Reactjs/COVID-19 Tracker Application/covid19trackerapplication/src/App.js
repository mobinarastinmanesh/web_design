import React from 'react' ;
import {Cards} from './components'
import style from './App.module.css' ;
import {fetchData} from './api' ;
class App extends React.Component {
   state = {
     data :{}
   }  

   async componentDidMount(){
     const fetchedData = await fetchData();
     this.setState({data : fetchedData }) // data :{confirmed , recovered , deaths , lastUpdate}
     
   }
   render() { 
     const  {data } = this.state ;
     console.log(this.state.data)
     return ( 
       <div className={ style.container }>
          <img className={style.title}  src="./image.png" />
          <Cards data={data} /> 
          
     
       </div>
      );
   }
 }
  
 export default App;

