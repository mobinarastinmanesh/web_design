import React,{Component} from 'react';
import Counter from './counter';

const Counters = ({counters,setCounter}) => {
    return ( 
        <React.Fragment>
            {counters.map( counter => (
                <Counter 
                  counters={counters}
                  counter={counter}
                  setCounter={setCounter}
                  key={counter.id}
                />
            ) )}
        </React.Fragment>

     );
}
 
 
export default Counters;