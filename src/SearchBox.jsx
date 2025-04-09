import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBos.css";
import { useState } from 'react';

export default function SearchBox({update}){
  let[city,setCity]= useState("");
  
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9a27373e650f2f8aef99faa0993c8373";

  let getWeatherInfo = async () =>{
    let responce =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric
      `);
    let jsonResponce = await responce.json();
    console.log(jsonResponce);
    let result = {
      city:city,
      temp: jsonResponce.main.temp,
      tempMin: jsonResponce.main.temp_min,
      tempMax: jsonResponce.main.temp_max,
      humidity: jsonResponce.main.humidity,
      feelsLike: jsonResponce.main.feels_like,
      weather: jsonResponce.weather[0].description,
      }
      console.log(result);
      return result;
    }
  
  
    let handleChange = (event)=>{
        setCity(event.target.value); 
    };
    let handleSubmit = async(evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newInfo = await  getWeatherInfo();
       update(newInfo)
    };


   return(
    <div className="SearchBox">
        
        <form onSubmit={handleSubmit}>
        
        <TextField id="city" label="city name*" variant="outlined" 
        required value={city}
        onChange={handleChange} />
      <br></br><br></br>
      <Button variant="contained" type = "submit">
        Send
      </Button> 
      <br></br>  <br></br>
        </form>
    </div>
   ) 
}