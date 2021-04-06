import  axios from 'axios' ;
//Axios is used to make API requests 
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () =>{
    try{
        const { data : { confirmed , recovered , deaths , lastUpdate } } = await axios.get(url);
        return {confirmed , recovered , deaths , lastUpdate }; 
    }catch (error){

    }
}