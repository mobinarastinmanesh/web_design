import React from 'react';
import { Card , CardContent , Typography , Grid } from '@material-ui/core';
import Loader from "react-loader-spinner";import style from './Cards.module.css';
import cx from 'classnames'
import CountUp from 'react-countup'
const Cards = ( {data :{confirmed , recovered , deaths , lastUpdate}}) =>{
    if(!confirmed){
        return (
            <div className={style.container}>
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
               />
            </div>
        ) ;
    }
   
    return(
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infacted</Typography>  
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                separator=","
                                duration={2.5}
                            />    
                        </Typography>  
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">number of active cases of COVID-19</Typography>
                    </CardContent>  
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>  
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                separator=","
                                duration={2.5}
                            />    
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">number of recoveries from  COVID-19</Typography>
                    </CardContent>  
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deathed</Typography>  
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                separator=","
                                duration={2.5}
                            />    
                        </Typography> 
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">number of deathed cases of COVID-19</Typography>
                    </CardContent>  
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Cards ;