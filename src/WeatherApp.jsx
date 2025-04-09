import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import './SearchBos.css';

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState({

        city:"dehli",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze", 
     });

     let UpdateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
     }
    return(
        <div style={{textAlign:"center"}}>
        <h1> Weather App</h1>
        <SearchBox update = {UpdateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );
}