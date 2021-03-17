import React from 'react' ;
 
function Hello(){
    const seyHello = () =>{
        console.log("hello");
    }
    return(
        <div>
            <h1>This is the Hello component</h1>
            <button onClick={seyHello}>sey hello</button>
        </div>
    );
}

export default Hello ;