import React, {useState} from 'react';
import SeasonImage from '../assets/season.png';
import {useNavigate} from 'react-router-dom';  //allows redirects (Remember to npm install react-router-dom)

function Search(){
    const [locationInput, setLocationInput] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    //invoke useNavigate
    const pageRedirect = useNavigate(); 
    /*
    pageRedirect.go(-1); //go back to the previous page 
    pageRedirect.push('/'); //go the page you want in this case it is home page
    */

    //Storing or Tracking input state 
    function handleInputChange(e){
        //console.log(e.target.value); 
        setLocationInput(e.target.value);
    }

    //using "async function()" with "await fetch()" so the function will not finish or continue until fetch return promise is completed
    async function handleFormSubmit(e){
        e.preventDefault(); //prevents refresh page when submit form 

        //API link to get the weather data from OpenWeatherMap
        const apiKey = process.env.REACT_APP_API_KEY; 
        const locationQuery = locationInput;
        const metric = "&units=metric";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}${metric}${apiKey}`

        //HTTP Get request to the OpenWeatherMap and save the returned promise dataObject and set the data as "weatherData"
        // await fetch(url)
        // .then(responsePromise => responsePromise.json())
        // .then(dataObject => setData(dataObject));  //using State

        //OR
        const responsePromise = await fetch(url)
        .then(response => {
            //check fetch data
            if(!response.ok){
                setErrorMessage('Could not fetch the data at this moment! Make sure there is no spelling errors or typos. Must be a city or country input.'); 
                throw Error('Could not fetch the data!');
            }
            else{
                return response;
            }
        }); 

                
        const Data = await responsePromise.json();  //convert data to JSON/Javascript object 
    
        //extract the necessary weather data 
        const icon = Data.weather[0].icon;
        const weatherData = {
            location: locationInput,
            temperature: Data.main.temp,
            temperatureMin: Data.main.temp_min,
            temperatureMax: Data.main.temp_max,
            description: Data.weather[0].description,
            imageURL: `http://openweathermap.org/img/wn/${icon}@2x.png`
        }
        
        //redirect to weather report page passing the data 
        pageRedirect("/weatherreport", {state: weatherData});  
    }  

    return(
        <div className="mainDiv">
            <img className="imgLogo" src={SeasonImage} alt="Seasons"/>
            <form onSubmit={handleFormSubmit} className="formSearch">
                {/* Show error message if there is one, problem with fetching data*/}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <label>The Weather Today For:</label>
                <br/>
                <br/>
                <input className="inputBox" id="location" type="text" name="locationName" value={locationInput} onChange={handleInputChange} placeholder="Input City or Country" required/>
                <button type="submit">Search</button>
            </form>
        </div>
    ); 
}

export default Search;