import React from "react";
import {useLocation} from 'react-router-dom'; //to retreive state weather data passed from Search.jsx

function WeatherReport(){
    const weatherData = useLocation(); 

    return(
        <div className="weatherReportDiv">
            <h1>The current temperature in {weatherData.state.location} is {weatherData.state.temperature} °C (Celcius)</h1>
            <br></br>
            <p>The temperature range is between {weatherData.state.temperatureMin}°C - {weatherData.state.temperatureMax}°C</p>
            <br></br>
            <img className="weathericon" src={weatherData.state.imageURL} alt="weather icon"></img>
            <br></br>
            <p>The weather is currently {weatherData.state.description}</p>
        </div>
    );
}

export default WeatherReport;