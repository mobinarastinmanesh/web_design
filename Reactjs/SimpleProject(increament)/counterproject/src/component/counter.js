import React, { Component, createFactory } from 'react';

const  Counter = ({counters,counter,setCounter}) => {
    const increamentHandler = (cnt) =>{
      
          const newCounters = counters.map( c => {
             if(c.id == cnt.id){
              
                 c.value = (c.value)+1 ;
                 console.log(c.value)
               return c ;
             }
             return c ;
            })
            setCounter(newCounters);
      }
    const deleteHandler = (cnt) =>{
    
        const newCounters = counters.filter( c => c.id !== cnt.id) ;
        setCounter(newCounters);
      }
    return ( 
        <div className="items" >
            <div className="numb">{counter.value}</div>
            <button className="inc_btn" type="button" onClick={()=>increamentHandler(counter)} >Increament</button>
            <button className="dlt_btn" type="button" onClick={()=>deleteHandler(counter)} >Delete</button>
        </div> 
    );
}
 

export default Counter;